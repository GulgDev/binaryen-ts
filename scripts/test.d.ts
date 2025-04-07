// @ts-nocheck

import * as binaryenApi from "../dist/index";

declare global {
    // Binaryen
    const binaryen: typeof binaryenApi;

    // Tests
    function assert(value: any): asserts value is true;
    namespace console {
        function log(...args: any[]): void;
    }

    // WebAssembly
    namespace WebAssembly {
        class Instance {
            readonly exports: any;

            constructor(module: Module, imports: any);
        }

        class Module {
            constructor(data: any);
        }
    }
}