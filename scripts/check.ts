import { type Symbol, Project } from "ts-morph";
import path from "path";
import { program } from "commander";

program
    .nameFromFilename(import.meta.filename)
    .description("Perform checks to find missing or redundant types");

program
    .argument("[filters...]");

program.parse();

let test: RegExp | undefined;

if (program.args.length > 0)
    test = new RegExp(
        program.args
            .map((filter) =>
                `^${filter.replaceAll(/([.+\-\?\[\]()])/g, "\\$1").replaceAll("**", ".+").replaceAll("*", "[^.]+")}$`)
            .join("|")
    );

const IGNORE = /^_|^HEAP[UF]?(8|16|32|64)$|^dynCall_[vij]+$|^stringTo(Ascii|UTF8OnStack)$|^calledRun$/;

function getSymbolMap(symbols: Symbol[]): Map<string, Symbol> {
    return new Map(symbols.map((symbol) => [symbol.getName(), symbol]));
}

console.log(`Checking export types...`);

const index_dts = path.resolve(import.meta.dirname, "../dist/index.d.ts");

console.log(`Loading ${index_dts}...`);

const project = new Project();
const file = project.addSourceFileAtPath(index_dts);

const typedExports = new Map(file.getExportSymbols().map((symbol) => [symbol.getName(), symbol.getAliasedSymbol()!]));

console.log(`Loading binaryen...`);

const { default: binaryen } = await import("../src/binaryen");
const binaryenExports = new Map(Object.entries(binaryen));

console.log(`Checking...`);

let missingTypes = 0, redundantTypes = 0;

function compare(prefix: string, js: Map<string, unknown>, types: Map<string, Symbol>) {
    js.forEach((value, name) => {
        if (IGNORE.test(name)) return;
        if (!types.has(name)) {
            if (!test || test.test(`${prefix}${name}`)) {
                console.error(`Type not found: ${prefix}${name}`);
                ++missingTypes;
            }
        }
        if (value && typeof value === "object") {
            compare(`${prefix}${name}.`,
                new Map(Object.entries(value)),
                types.has(name) ?
                    getSymbolMap(types.get(name)!.getValueDeclaration()!.getType().getProperties()) :
                    new Map()
            );
        }
    });
    types.forEach((type, name) => {
        if (!js.has(name)) {
            if (test && !test.test(`${prefix}${name}`)) return;
            for (const declaration of type.getDeclarations()) {
                for (const range of declaration.getLeadingCommentRanges())
                    if (range.getText().includes("@binaryen-ts"))
                        return;
            }
            console.warn(`Found redundant type: ${prefix}${name}`);
            ++redundantTypes;
        }
    });
}

function compareClass(name: string, prototype: any, clazz: any) {
    if (typedExports.has(name)) {
        compare(`${name}.`,
            new Map(Object.entries(clazz)),
            getSymbolMap(typedExports.get(name)!.getExports().filter((symbol) => symbol.getName() !== "prototype"))
        );
        compare(`${name}.prototype.`,
            new Map(Object.entries(prototype)),
            getSymbolMap(typedExports.get(name)!.getMembers())
        );
    } else {
        compare(`${name}.`,
            new Map(Object.entries(clazz)),
            new Map()
        );
        compare(`${name}.prototype.`,
            new Map(Object.entries(prototype)),
            new Map()
        );
    }
}

compare("", binaryenExports, typedExports);

const module = new binaryen.Module();
const expr = module.unreachable();
compareClass("Module", module, binaryen.Module);
compareClass("Relooper", new binaryen.Relooper(module), binaryen.Relooper);
compareClass("ExpressionRunner", new binaryen.ExpressionRunner(module), binaryen.ExpressionRunner);
compareClass("Expression", new binaryen.Expression(expr), binaryen.Expression);
for (let name in binaryen.ExpressionIds) {
    name = name.replace(/Id$/, "");
    if (name in binaryen)
        compareClass(name, new binaryen[name](expr), binaryen[name]);
}
compareClass("Function", new binaryen.Function(
    module.addFunction("nop", binaryen.none, binaryen.none, [], expr)
), binaryen.Function);

const message = missingTypes > 0 || redundantTypes > 0 ?
                    `(Found ${missingTypes} missing and ${redundantTypes} redundant types)` :
                    `(No errors)`;
console.log(`Done! ${message}`);

if (missingTypes > 0)
    process.exit(-1);
else if (redundantTypes > 0)
    process.exit(1);
else
    process.exit(0);