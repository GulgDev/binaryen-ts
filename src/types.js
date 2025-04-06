import binaryen from "./binaryen";

export let {
    none,
    i32,
    i64,
    f32,
    f64,
    v128,
    funcref,
    externref,
    anyref,
    eqref,
    i31ref,
    structref,
    stringref,
    unreachable,
    auto,

    createType,
    expandType
} = binaryen;