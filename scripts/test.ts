import { Project } from "ts-morph";
import path from "path";

const project = new Project({
    compilerOptions: {
        lib: ["lib.esnext.d.ts"],
        rootDir: path.resolve(import.meta.dirname, "../binaryen/test/binaryen.js"),
        outDir: "./a",
        strict: false,
        allowJs: true,
        checkJs: true,
        types: []
    }
});
project.addSourceFilesAtPaths([
    path.resolve(import.meta.dirname, "../binaryen/test/binaryen.js/*.js"),
    path.resolve(import.meta.dirname, "./test.d.ts")
]);
const diagnostics = project.getPreEmitDiagnostics();
console.log(project.formatDiagnosticsWithColorAndContext(diagnostics));
if (diagnostics.length > 0)
    process.exit(-1);

const result = project.emitToMemory();
// console.log(result.getFiles());