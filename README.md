Binaryen.ts
===========

**Binaryen.ts** is a TypeScript port of [Binaryen](https://github.com/WebAssembly/binaryen), allowing you to generate [WebAssembly](https://webassembly.org) using a TypeScript API. It was inspired by [**binaryen.js**](https://github.com/AssemblyScript/binaryen.js), which doesn't seem to be actively maintained.

Usage
-----

```
npm install --save binaryen.ts
```

```ts
import { Module } from "binaryen.ts";
import { createType, i32 } from "binaryen.ts/types";

// Create a module with a single function
const module = new Module();

module.addFunction("add", createType([i32, i32]), i32, [i32],
  module.block(null, [
    module.local.set(2,
      module.i32.add(
        module.local.get(0, i32),
        module.local.get(1, i32)
      )
    ),
    module.return(
      module.local.get(2, i32)
    )
  ])
);
module.addFunctionExport("add", "add");

// Optimize the module using default passes and levels
module.optimize();

// Validate the module
if (!module.validate())
  throw new TypeError("Validation error");

// Generate text format and binary
const wat = module.emitText();
const wasm = module.emitBinary();

// Example usage with the WebAssembly API
const compiled = new WebAssembly.Module(wasm);
const instance = new WebAssembly.Instance(compiled, {});
console.log(instance.exports.add(41, 1));
```