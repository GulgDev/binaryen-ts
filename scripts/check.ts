import { Project, Symbol } from "ts-morph";
import path from "path";
import binaryen from "../src/binaryen";

const IGNORE = /^_|^HEAP[UF]?(8|16|32|64)$|^dynCall_[vij]+$|^stringTo(Ascii|UTF8OnStack)$|^calledRun$/;

function getSymbolMap(symbols: Symbol[]): Map<string, Symbol> {
    return new Map(symbols.map((symbol) => [symbol.getName(), symbol]));
}

console.log(`Checking export types...`);

const index_dts = path.resolve(import.meta.dirname, "../dist/index.d.ts");

console.log(`Loading ${index_dts}...`);

const project = new Project();
const file = project.addSourceFileAtPath(index_dts);

const typedExports = getSymbolMap(file.getExportSymbols().map((symbol) => symbol.getAliasedSymbol()!));

console.log(`Loading binaryen...`);

const binaryenExports = new Map(Object.entries(binaryen));

console.log(`Checking...`);

let missingTypes = 0, redundantTypes = 0, numWarnings = 0;

function compare(prefix: string, js: Map<string, unknown>, types: Map<string, Symbol>) {
    js.forEach((value, name) => {
        if (IGNORE.test(name)) return;
        if (!types.has(name)) {
            console.error(`Type not found: ${prefix}.${name}`);
            ++missingTypes;
        } else if (value && typeof value === "object") {
            compare(prefix + "." + name, new Map(Object.entries(value)), getSymbolMap(types.get(name)!.getDeclaredType().getProperties()));
        }
    });
    types.forEach((type, name) => {
        if (!js.has(name)) {
            const declaration = type.getValueDeclaration();
            if (declaration) {
                for (const range of declaration.getLeadingCommentRanges())
                    if (range.getText().includes("@binaryen-ts"))
                        return;
            }
            console.warn(`Found redundant type: ${prefix}.${name}`);
            ++redundantTypes;
        }
    });
}

function compareClass(name: string, prototype: any, clazz: any) {
    if (typedExports.has(name)) {
        compare("binaryen." + name,
            new Map(Object.entries(clazz)),
            getSymbolMap(typedExports.get(name)!.getExports().filter((symbol) => symbol.getName() !== "prototype"))
        );
        compare("binaryen." + name + ".prototype",
            new Map(Object.entries(prototype)),
            getSymbolMap(typedExports.get(name)!.getMembers())
        );
    }
}

compare("binaryen", binaryenExports, typedExports);

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

console.log(`Done! (Found ${missingTypes} missing and ${redundantTypes} redundant types, generated ${numWarnings} warnings)`);

if (missingTypes > 0)
    process.exit(-1);
else if (redundantTypes > 0 || numWarnings > 0)
    process.exit(1);
else
    process.exit(0);