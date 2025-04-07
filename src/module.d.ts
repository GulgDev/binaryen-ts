import { BinaryenExpressionRef } from "./expressions";
import { BinaryenHeapType, BinaryenType } from "./types";

declare const __BinaryenModuleRef: unique symbol;
/* @binaryen-ts */ export type BinaryenModuleRef = number & { [__BinaryenModuleRef]: void };

declare const __BinaryenFunctionRef: unique symbol;
/* @binaryen-ts */ export type BinaryenFunctionRef = number & { [__BinaryenFunctionRef]: void };

declare const __BinaryenGlobalRef: unique symbol;
/* @binaryen-ts */ export type BinaryenGlobalRef = number & { [__BinaryenGlobalRef]: void };

declare const __BinaryenTableRef: unique symbol;
/* @binaryen-ts */ export type BinaryenTableRef = number & { [__BinaryenTableRef]: void };

declare const __BinaryenElementSegmentRef: unique symbol;
/* @binaryen-ts */ export type BinaryenElementSegmentRef = number & { [__BinaryenElementSegmentRef]: void };

declare const __BinaryenTagRef: unique symbol;
/* @binaryen-ts */ export type BinaryenTagRef = number & { [__BinaryenTagRef]: void };

declare const __BinaryenExportRef: unique symbol;
/* @binaryen-ts */ export type BinaryenExportRef = number & { [__BinaryenExportRef]: void };

// @binaryen-ts
export interface MemorySegment {
    name?: string;
    data: ArrayLike<number>;
    passive: boolean;
    offset: number;
}

// @binaryen-ts
export interface MemoryInfo {
    module: string;
    base: string;
    initial: number;
    max?: number;
    shared: boolean;
    is64: boolean;
}

// @binaryen-ts
export interface MemorySegmentInfo {
    data: ArrayLike<number>;
    passive: boolean;
    offset: number;
}

export enum Features {
    MVP = 0,
    Atomics = 1 << 0,
    MutableGlobals = 1 << 1,
    NontrappingFPToInt = 1 << 2,
    SIMD = 1 << 3,
    BulkMemory = 1 << 4,
    SignExt = 1 << 5,
    ExceptionHandling = 1 << 6,
    TailCall = 1 << 7,
    ReferenceTypes = 1 << 8,
    Multivalue = 1 << 9,
    GC = 1 << 10,
    Memory64 = 1 << 11,
    RelaxedSIMD = 1 << 12,
    ExtendedConst = 1 << 13,
    Strings = 1 << 14,
    MultiMemory = 1 << 15,
    StackSwitching = 1 << 16,
    SharedEverything = 1 << 17,
    FP16 = 1 << 18,
    BulkMemoryOpt = 1 << 19,
    CallIndirectOverlong = 1 << 20,
    All = (1 << 22) - 1,
}

// @binaryen-ts
export interface EmitBinaryResult {
    binary: Uint8Array;
    sourceMap: string;
}

// @binaryen-ts
export type Pass =
    | "alignment-lowering"
    | "asyncify"
    | "avoid-reinterprets"
    | "dae"
    | "dae-optimizing"
    | "abstract-type-refining"
    | "coalesce-locals"
    | "coalesce-locals-learning"
    | "code-pushing"
    | "code-folding"
    | "const-hoisting"
    | "cfp"
    | "cfp-reftest"
    | "dce"
    | "dealign"
    | "propagate-debug-locs"
    | "denan"
    | "directize"
    | "discard-global-effects"
    | "dfo"
    | "dwarfdump"
    | "duplicate-import-elimination"
    | "duplicate-function-elimination"
    | "emit-target-features"
    | "enclose-world"
    | "extract-function"
    | "extract-function-index"
    | "flatten"
    | "fpcast-emu"
    | "func-metrics"
    | "generate-dyncalls"
    | "generate-i64-dyncalls"
    | "generate-global-effects"
    | "global-refining"
    | "gsi"
    | "gto"
    | "gufa"
    | "gufa-cast-all"
    | "gufa-optimizing"
    | "optimize-j2cl"
    | "merge-j2cl-itables"
    | "type-refining"
    | "type-refining-gufa"
    | "heap2local"
    | "heap-store-optimization"
    | "inline-main"
    | "inlining"
    | "inlining-optimizing"
    | "intrinsic-lowering"
    | "jspi"
    | "legalize-js-interface"
    | "legalize-and-prune-js-interface"
    | "local-cse"
    | "local-subtyping"
    | "log-execution"
    | "i64-to-i32-lowering"
    | "trace-calls"
    | "instrument-locals"
    | "instrument-memory"
    | "licm"
    | "limit-segments"
    | "memory64-lowering"
    | "table64-lowering"
    | "llvm-memory-copy-fill-lowering"
    | "memory-packing"
    | "merge-blocks"
    | "merge-similar-functions"
    | "merge-locals"
    | "metrics"
    | "minify-imports"
    | "minify-imports-and-exports"
    | "minify-imports-and-exports-and-modules"
    | "minimize-rec-groups"
    | "mod-asyncify-always-and-only-unwind"
    | "mod-asyncify-never-unwind"
    | "monomorphize"
    | "monomorphize-always"
    | "multi-memory-lowering"
    | "multi-memory-lowering-with-bounds-checks"
    | "nm"
    | "name-types"
    | "no-inline"
    | "no-full-inline"
    | "no-partial-inline"
    | "llvm-nontrapping-fptoint-lowering"
    | "once-reduction"
    | "optimize-added-constants"
    | "optimize-added-constants-propagate"
    | "optimize-casts"
    | "optimize-instructions"
    | "pick-load-signs"
    | "poppify"
    | "post-emscripten"
    | "optimize-for-js"
    | "precompute"
    | "precompute-propagate"
    | "print"
    | "print-minified"
    | "print-features"
    | "print-full"
    | "print-call-graph"
    | "print-function-map"
    | "symbolmap"
    | "propagate-globals-globally"
    | "remove-non-js-ops"
    | "remove-imports"
    | "remove-memory-init"
    | "remove-memory"
    | "remove-unused-brs"
    | "remove-unused-module-elements"
    | "remove-unused-nonfunction-module-elements"
    | "remove-unused-names"
    | "remove-unused-types"
    | "reorder-functions-by-name"
    | "reorder-functions"
    | "reorder-globals"
    | "reorder-locals"
    | "rereloop"
    | "rse"
    | "roundtrip"
    | "safe-heap"
    | "set-globals"
    | "separate-data-segments"
    | "signature-pruning"
    | "signature-refining"
    | "signext-lowering"
    | "simplify-globals"
    | "simplify-globals-optimizing"
    | "simplify-locals"
    | "simplify-locals-nonesting"
    | "simplify-locals-notee"
    | "simplify-locals-nostructure"
    | "simplify-locals-notee-nostructure"
    | "souperify"
    | "souperify-single-use"
    | "spill-pointers"
    | "stub-unsupported-js"
    | "ssa"
    | "ssa-nomerge"
    | "string-gathering"
    | "string-lifting"
    | "string-lowering"
    | "string-lowering-magic-imports"
    | "string-lowering-magic-imports-assert"
    | "strip"
    | "stack-check"
    | "strip-debug"
    | "strip-dwarf"
    | "strip-producers"
    | "strip-eh"
    | "strip-target-features"
    | "translate-to-new-eh"
    | "translate-to-exnref"
    | "trap-mode-clamp"
    | "trap-mode-js"
    | "tuple-optimization"
    | "type-finalizing"
    | "type-merging"
    | "type-ssa"
    | "type-unfinalizing"
    | "unsubtyping"
    | "untee"
    | "vacuum";

export class Module {
    readonly ptr: BinaryenModuleRef;

    block(name: string | null, children: BinaryenExpressionRef[], type: BinaryenType): BinaryenExpressionRef;
    if(condition: BinaryenExpressionRef, ifTrue: BinaryenExpressionRef, ifFalse?: BinaryenExpressionRef): BinaryenExpressionRef;
    loop(label: string | null, body: BinaryenExpressionRef): BinaryenExpressionRef;
    br(label: string, condition?: BinaryenExpressionRef, value?: BinaryenExpressionRef): BinaryenExpressionRef;
    break: typeof this.br;
    br_if: typeof this.br;
    switch(names: string[], defaultName: string, condition: BinaryenExpressionRef, value?: BinaryenExpressionRef): BinaryenExpressionRef;
    call(name: string, operands: BinaryenExpressionRef[], type: BinaryenType): BinaryenExpressionRef;
    call_indirect(table: string, target: BinaryenExpressionRef, operands: BinaryenExpressionRef[], params: BinaryenType, results: BinaryenType): BinaryenExpressionRef;
    callIndirect: void;
    return_call(name: string, operands: BinaryenExpressionRef[], type: BinaryenType): BinaryenExpressionRef;
    returnCall: void;
    return_call_indirect(table: string, target: BinaryenExpressionRef, operands: BinaryenExpressionRef[], params: BinaryenType, results: BinaryenType): BinaryenExpressionRef;
    returnCallIndirect: void;
    local: {
        get(name: string, type: BinaryenType): BinaryenExpressionRef;
        set(name: string, value: BinaryenExpressionRef): BinaryenExpressionRef;
        tee(name: string, value: BinaryenExpressionRef, type: BinaryenType): BinaryenExpressionRef;
    };
    global: {
        get(name: string, type: BinaryenType): BinaryenExpressionRef;
        set(name: string, value: BinaryenExpressionRef): BinaryenExpressionRef;
    };
    table: {
        get(name: string, index: number, type: BinaryenType): BinaryenExpressionRef;
        set(name: string, index: number, value: BinaryenExpressionRef): BinaryenExpressionRef;
        size(name: string): BinaryenExpressionRef;
        grow(name: string, value: BinaryenExpressionRef, delta: BinaryenExpressionRef): BinaryenExpressionRef;
    };
    memory: {
        size(name: string, memory64?: boolean): BinaryenExpressionRef;
        grow(value: BinaryenExpressionRef, name: string, memory64?: boolean): BinaryenExpressionRef;
        init(segment: string, dest: BinaryenExpressionRef, offset: BinaryenExpressionRef, size: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        copy(dest: BinaryenExpressionRef, source: BinaryenExpressionRef, size: BinaryenExpressionRef, destMemory?: string, sourceMemory?: string): BinaryenExpressionRef;
        fill(dest: BinaryenExpressionRef, value: BinaryenExpressionRef, size: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        atomic: {
            notify(ptr: BinaryenExpressionRef, notifyCount: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
            wait32(ptr: BinaryenExpressionRef, expected: BinaryenExpressionRef, timeout: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
            wait64(ptr: BinaryenExpressionRef, expected: BinaryenExpressionRef, timeout: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        }
    };
    data: {
        drop(segment: string): BinaryenExpressionRef;
    };
    i32: {
        load(offset: number, align: number, ptr: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        load8_s(offset: number, align: number, ptr: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        load8_u(offset: number, align: number, ptr: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        load16_s(offset: number, align: number, ptr: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        load16_u(offset: number, align: number, ptr: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        store(offset: number, align: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        store8(offset: number, align: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        store16(offset: number, align: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        const(x: number): BinaryenExpressionRef;
        clz(value: BinaryenExpressionRef): BinaryenExpressionRef;
        ctz(value: BinaryenExpressionRef): BinaryenExpressionRef;
        popcnt(value: BinaryenExpressionRef): BinaryenExpressionRef;
        eqz(value: BinaryenExpressionRef): BinaryenExpressionRef;
        trunc_s: {
            f32(value: BinaryenExpressionRef): BinaryenExpressionRef;
            f64(value: BinaryenExpressionRef): BinaryenExpressionRef;
        };
        trunc_u: {
            f32(value: BinaryenExpressionRef): BinaryenExpressionRef;
            f64(value: BinaryenExpressionRef): BinaryenExpressionRef;
        };
        trunc_s_sat: {
            f32(value: BinaryenExpressionRef): BinaryenExpressionRef;
            f64(value: BinaryenExpressionRef): BinaryenExpressionRef;
        };
        trunc_u_sat: {
            f32(value: BinaryenExpressionRef): BinaryenExpressionRef;
            f64(value: BinaryenExpressionRef): BinaryenExpressionRef;
        };
        reinterpret(value: BinaryenExpressionRef): BinaryenExpressionRef;
        extend8_s(value: BinaryenExpressionRef): BinaryenExpressionRef;
        extend16_s(value: BinaryenExpressionRef): BinaryenExpressionRef;
        wrap(value: BinaryenExpressionRef): BinaryenExpressionRef;
        add(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        sub(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        mul(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        div_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        div_u(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        rem_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        rem_u(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        and(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        or(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        xor(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        shl(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        shr_u(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        shr_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        rotl(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        rotr(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        eq(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        ne(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        lt_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        lt_u(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        le_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        le_u(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        gt_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        gt_u(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        ge_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        ge_u(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        atomic: {
            load(offset: number, ptr: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
            load8_u(offset: number, ptr: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
            load16_u(offset: number, ptr: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
            store(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
            store8(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
            store16(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
            rmw: {
                add(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
                sub(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
                and(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
                or(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
                xor(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
                xchg(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
                cmpxchg(offset: number, ptr: BinaryenExpressionRef, expected: BinaryenExpressionRef, replacement: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
            };
            rmw8_u: {
                add(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
                sub(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
                and(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
                or(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
                xor(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
                xchg(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
                cmpxchg(offset: number, ptr: BinaryenExpressionRef, expected: BinaryenExpressionRef, replacement: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
            };
            rmw16_u: {
                add(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
                sub(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
                and(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
                or(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
                xor(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
                xchg(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
                cmpxchg(offset: number, ptr: BinaryenExpressionRef, expected: BinaryenExpressionRef, replacement: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
            };
        };
        pop(): BinaryenExpressionRef;
    };
    i64: {
        load(offset: number, align: number, ptr: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        load8_s(offset: number, align: number, ptr: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        load8_u(offset: number, align: number, ptr: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        load16_s(offset: number, align: number, ptr: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        load16_u(offset: number, align: number, ptr: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        load32_s(offset: number, align: number, ptr: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        load32_u(offset: number, align: number, ptr: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        store(offset: number, align: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        store8(offset: number, align: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        store16(offset: number, align: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        store32(offset: number, align: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        const(x: number, y: number): BinaryenExpressionRef;
        clz(value: BinaryenExpressionRef): BinaryenExpressionRef;
        ctz(value: BinaryenExpressionRef): BinaryenExpressionRef;
        popcnt(value: BinaryenExpressionRef): BinaryenExpressionRef;
        eqz(value: BinaryenExpressionRef): BinaryenExpressionRef;
        trunc_s: {
            f32(value: BinaryenExpressionRef): BinaryenExpressionRef;
            f64(value: BinaryenExpressionRef): BinaryenExpressionRef;
        };
        trunc_u: {
            f32(value: BinaryenExpressionRef): BinaryenExpressionRef;
            f64(value: BinaryenExpressionRef): BinaryenExpressionRef;
        };
        trunc_s_sat: {
            f32(value: BinaryenExpressionRef): BinaryenExpressionRef;
            f64(value: BinaryenExpressionRef): BinaryenExpressionRef;
        };
        trunc_u_sat: {
            f32(value: BinaryenExpressionRef): BinaryenExpressionRef;
            f64(value: BinaryenExpressionRef): BinaryenExpressionRef;
        };
        reinterpret(value: BinaryenExpressionRef): BinaryenExpressionRef;
        extend8_s(value: BinaryenExpressionRef): BinaryenExpressionRef;
        extend16_s(value: BinaryenExpressionRef): BinaryenExpressionRef;
        extend32_s(value: BinaryenExpressionRef): BinaryenExpressionRef;
        extend_s(value: BinaryenExpressionRef): BinaryenExpressionRef;
        extend_u(value: BinaryenExpressionRef): BinaryenExpressionRef;
        add(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        sub(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        mul(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        div_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        div_u(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        rem_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        rem_u(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        and(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        or(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        xor(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        shl(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        shr_u(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        shr_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        rotl(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        rotr(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        eq(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        ne(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        lt_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        lt_u(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        le_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        le_u(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        gt_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        gt_u(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        ge_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        ge_u(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        atomic: {
            load(offset: number, ptr: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
            load8_u(offset: number, ptr: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
            load16_u(offset: number, ptr: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
            load32_u(offset: number, ptr: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
            store(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
            store8(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
            store16(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
            store32(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
            rmw: {
                add(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
                sub(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
                and(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
                or(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
                xor(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
                xchg(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
                cmpxchg(offset: number, ptr: BinaryenExpressionRef, expected: BinaryenExpressionRef, replacement: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
            };
            rmw8_u: {
                add(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
                sub(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
                and(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
                or(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
                xor(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
                xchg(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
                cmpxchg(offset: number, ptr: BinaryenExpressionRef, expected: BinaryenExpressionRef, replacement: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
            };
            rmw16_u: {
                add(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
                sub(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
                and(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
                or(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
                xor(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
                xchg(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
                cmpxchg(offset: number, ptr: BinaryenExpressionRef, expected: BinaryenExpressionRef, replacement: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
            };
            rmw32_u: {
                add(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
                sub(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
                and(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
                or(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
                xor(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
                xchg(offset: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
                cmpxchg(offset: number, ptr: BinaryenExpressionRef, expected: BinaryenExpressionRef, replacement: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
            };
        };
        pop(): BinaryenExpressionRef;
    };
    f32: {
        load(offset: number, align: number, ptr: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        store(offset: number, align: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        const(x: number): BinaryenExpressionRef;
        const_bits(x: number): BinaryenExpressionRef;
        neg(value: BinaryenExpressionRef): BinaryenExpressionRef;
        abs(value: BinaryenExpressionRef): BinaryenExpressionRef;
        ceil(value: BinaryenExpressionRef): BinaryenExpressionRef;
        floor(value: BinaryenExpressionRef): BinaryenExpressionRef;
        trunc(value: BinaryenExpressionRef): BinaryenExpressionRef;
        nearest(value: BinaryenExpressionRef): BinaryenExpressionRef;
        sqrt(value: BinaryenExpressionRef): BinaryenExpressionRef;
        reinterpret(value: BinaryenExpressionRef): BinaryenExpressionRef;
        convert_s: {
            i32(value: BinaryenExpressionRef): BinaryenExpressionRef;
            i64(value: BinaryenExpressionRef): BinaryenExpressionRef;
        };
        convert_u: {
            i32(value: BinaryenExpressionRef): BinaryenExpressionRef;
            i64(value: BinaryenExpressionRef): BinaryenExpressionRef;
        };
        demote(value: BinaryenExpressionRef): BinaryenExpressionRef;
        add(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        sub(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        mul(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        div(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        copysign(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        min(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        max(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        eq(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        ne(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        lt(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        le(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        gt(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        ge(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        pop(): BinaryenExpressionRef;
    };
    f64: {
        load(offset: number, align: number, ptr: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        store(offset: number, align: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        const(x: number): BinaryenExpressionRef;
        const_bits(x: number, y: number): BinaryenExpressionRef;
        neg(value: BinaryenExpressionRef): BinaryenExpressionRef;
        abs(value: BinaryenExpressionRef): BinaryenExpressionRef;
        ceil(value: BinaryenExpressionRef): BinaryenExpressionRef;
        floor(value: BinaryenExpressionRef): BinaryenExpressionRef;
        trunc(value: BinaryenExpressionRef): BinaryenExpressionRef;
        nearest(value: BinaryenExpressionRef): BinaryenExpressionRef;
        sqrt(value: BinaryenExpressionRef): BinaryenExpressionRef;
        reinterpret(value: BinaryenExpressionRef): BinaryenExpressionRef;
        convert_s: {
            i32(value: BinaryenExpressionRef): BinaryenExpressionRef;
            i64(value: BinaryenExpressionRef): BinaryenExpressionRef;
        };
        convert_u: {
            i32(value: BinaryenExpressionRef): BinaryenExpressionRef;
            i64(value: BinaryenExpressionRef): BinaryenExpressionRef;
        };
        promote(value: BinaryenExpressionRef): BinaryenExpressionRef;
        add(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        sub(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        mul(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        div(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        copysign(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        min(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        max(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        eq(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        ne(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        lt(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        le(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        gt(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        ge(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        pop(): BinaryenExpressionRef;
    };
    v128: {
        load(offset: number, align: number, ptr: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        load8_splat(offset: number, align: number, ptr: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        load16_splat(offset: number, align: number, ptr: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        load32_splat(offset: number, align: number, ptr: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        load64_splat(offset: number, align: number, ptr: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        load8x8_s(offset: number, align: number, ptr: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        load8x8_u(offset: number, align: number, ptr: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        load16x4_s(offset: number, align: number, ptr: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        load16x4_u(offset: number, align: number, ptr: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        load32x2_s(offset: number, align: number, ptr: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        load32x2_u(offset: number, align: number, ptr: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        load32_zero(offset: number, align: number, ptr: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        load64_zero(offset: number, align: number, ptr: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        load8_lane(offset: number, align: number, index: number, ptr: BinaryenExpressionRef, vec: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        load16_lane(offset: number, align: number, index: number, ptr: BinaryenExpressionRef, vec: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        load32_lane(offset: number, align: number, index: number, ptr: BinaryenExpressionRef, vec: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        load64_lane(offset: number, align: number, index: number, ptr: BinaryenExpressionRef, vec: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        store8_lane(offset: number, align: number, index: number, ptr: BinaryenExpressionRef, vec: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        store16_lane(offset: number, align: number, index: number, ptr: BinaryenExpressionRef, vec: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        store32_lane(offset: number, align: number, index: number, ptr: BinaryenExpressionRef, vec: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        store64_lane(offset: number, align: number, index: number, ptr: BinaryenExpressionRef, vec: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        store(offset: number, align: number, ptr: BinaryenExpressionRef, value: BinaryenExpressionRef, name?: string): BinaryenExpressionRef;
        const(i8s: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]): BinaryenExpressionRef;
        not(value: BinaryenExpressionRef): BinaryenExpressionRef;
        any_true(value: BinaryenExpressionRef): BinaryenExpressionRef;
        and(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        or(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        xor(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        andnot(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        bitselect(left: BinaryenExpressionRef, right: BinaryenExpressionRef, cond: BinaryenExpressionRef): BinaryenExpressionRef;
        pop(): BinaryenExpressionRef;
    };
    i8x16: {
        shuffle(left: BinaryenExpressionRef, right: BinaryenExpressionRef, mask: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]): BinaryenExpressionRef;
        swizzle(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        splat(value: BinaryenExpressionRef): BinaryenExpressionRef;
        extract_lane_s(vec: BinaryenExpressionRef, index: BinaryenExpressionRef): BinaryenExpressionRef;
        extract_lane_u(vec: BinaryenExpressionRef, index: BinaryenExpressionRef): BinaryenExpressionRef;
        replace_lane(vec: BinaryenExpressionRef, index: BinaryenExpressionRef, value: BinaryenExpressionRef): BinaryenExpressionRef;
        eq(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        ne(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        lt_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        lt_u(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        gt_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        gt_u(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        le_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        le_u(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        ge_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        ge_u(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        abs(value: BinaryenExpressionRef): BinaryenExpressionRef;
        neg(value: BinaryenExpressionRef): BinaryenExpressionRef;
        all_true(value: BinaryenExpressionRef): BinaryenExpressionRef;
        bitmask(value: BinaryenExpressionRef): BinaryenExpressionRef;
        popcnt(value: BinaryenExpressionRef): BinaryenExpressionRef;
        shl(vec: BinaryenExpressionRef, shift: BinaryenExpressionRef): BinaryenExpressionRef;
        shr_s(vec: BinaryenExpressionRef, shift: BinaryenExpressionRef): BinaryenExpressionRef;
        shr_u(vec: BinaryenExpressionRef, shift: BinaryenExpressionRef): BinaryenExpressionRef;
        add(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        add_saturate_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        add_saturate_u(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        sub(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        sub_saturate_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        sub_saturate_u(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        min_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        min_u(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        max_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        max_u(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        avgr_u(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        narrow_i16x8_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        narrow_i16x8_u(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
    };
    i16x8: {
        splat(value: BinaryenExpressionRef): BinaryenExpressionRef;
        extract_lane_s(vec: BinaryenExpressionRef, index: BinaryenExpressionRef): BinaryenExpressionRef;
        extract_lane_u(vec: BinaryenExpressionRef, index: BinaryenExpressionRef): BinaryenExpressionRef;
        replace_lane(vec: BinaryenExpressionRef, index: BinaryenExpressionRef, value: BinaryenExpressionRef): BinaryenExpressionRef;
        eq(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        ne(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        lt_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        lt_u(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        gt_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        gt_u(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        le_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        le_u(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        ge_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        ge_u(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        abs(value: BinaryenExpressionRef): BinaryenExpressionRef;
        neg(value: BinaryenExpressionRef): BinaryenExpressionRef;
        all_true(value: BinaryenExpressionRef): BinaryenExpressionRef;
        bitmask(value: BinaryenExpressionRef): BinaryenExpressionRef;
        shl(vec: BinaryenExpressionRef, shift: BinaryenExpressionRef): BinaryenExpressionRef;
        shr_s(vec: BinaryenExpressionRef, shift: BinaryenExpressionRef): BinaryenExpressionRef;
        shr_u(vec: BinaryenExpressionRef, shift: BinaryenExpressionRef): BinaryenExpressionRef;
        add(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        add_saturate_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        add_saturate_u(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        sub(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        sub_saturate_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        sub_saturate_u(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        mul(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        min_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        min_u(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        max_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        max_u(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        avgr_u(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        q15mulr_sat_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        extmul_low_i8x16_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        extmul_high_i8x16_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        extmul_low_i8x16_u(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        extmul_high_i8x16_u(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        extadd_pairwise_i8x16_s(value: BinaryenExpressionRef): BinaryenExpressionRef;
        extadd_pairwise_i8x16_u(value: BinaryenExpressionRef): BinaryenExpressionRef;
        narrow_i32x4_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        narrow_i32x4_u(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        extend_low_i8x16_s(value: BinaryenExpressionRef): BinaryenExpressionRef;
        extend_high_i8x16_s(value: BinaryenExpressionRef): BinaryenExpressionRef;
        extend_low_i8x16_u(value: BinaryenExpressionRef): BinaryenExpressionRef;
        extend_high_i8x16_u(value: BinaryenExpressionRef): BinaryenExpressionRef;
    };
    i32x4: {
        splat(value: BinaryenExpressionRef): BinaryenExpressionRef;
        extract_lane(vec: BinaryenExpressionRef, index: BinaryenExpressionRef): BinaryenExpressionRef;
        replace_lane(vec: BinaryenExpressionRef, index: BinaryenExpressionRef, value: BinaryenExpressionRef): BinaryenExpressionRef;
        eq(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        ne(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        lt_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        lt_u(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        gt_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        gt_u(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        le_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        le_u(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        ge_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        ge_u(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        abs(value: BinaryenExpressionRef): BinaryenExpressionRef;
        neg(value: BinaryenExpressionRef): BinaryenExpressionRef;
        all_true(value: BinaryenExpressionRef): BinaryenExpressionRef;
        bitmask(value: BinaryenExpressionRef): BinaryenExpressionRef;
        shl(vec: BinaryenExpressionRef, shift: BinaryenExpressionRef): BinaryenExpressionRef;
        shr_s(vec: BinaryenExpressionRef, shift: BinaryenExpressionRef): BinaryenExpressionRef;
        shr_u(vec: BinaryenExpressionRef, shift: BinaryenExpressionRef): BinaryenExpressionRef;
        add(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        sub(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        mul(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        min_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        min_u(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        max_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        max_u(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        dot_i16x8_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        extmul_low_i16x8_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        extmul_high_i16x8_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        extmul_low_i16x8_u(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        extmul_high_i16x8_u(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        extadd_pairwise_i16x8_s(value: BinaryenExpressionRef): BinaryenExpressionRef;
        extadd_pairwise_i16x8_u(value: BinaryenExpressionRef): BinaryenExpressionRef;
        trunc_sat_f32x4_s(value: BinaryenExpressionRef): BinaryenExpressionRef;
        trunc_sat_f32x4_u(value: BinaryenExpressionRef): BinaryenExpressionRef;
        extend_low_i16x8_s(value: BinaryenExpressionRef): BinaryenExpressionRef;
        extend_high_i16x8_s(value: BinaryenExpressionRef): BinaryenExpressionRef;
        extend_low_i16x8_u(value: BinaryenExpressionRef): BinaryenExpressionRef;
        extend_high_i16x8_u(value: BinaryenExpressionRef): BinaryenExpressionRef;
        trunc_sat_f64x2_s_zero(value: BinaryenExpressionRef): BinaryenExpressionRef;
        trunc_sat_f64x2_u_zero(value: BinaryenExpressionRef): BinaryenExpressionRef;
    };
    i64x2: {
        splat(value: BinaryenExpressionRef): BinaryenExpressionRef;
        extract_lane(vec: BinaryenExpressionRef, index: BinaryenExpressionRef): BinaryenExpressionRef;
        replace_lane(vec: BinaryenExpressionRef, index: BinaryenExpressionRef, value: BinaryenExpressionRef): BinaryenExpressionRef;
        eq(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        ne(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        lt_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        gt_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        le_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        ge_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        abs(value: BinaryenExpressionRef): BinaryenExpressionRef;
        neg(value: BinaryenExpressionRef): BinaryenExpressionRef;
        all_true(value: BinaryenExpressionRef): BinaryenExpressionRef;
        bitmask(value: BinaryenExpressionRef): BinaryenExpressionRef;
        shl(vec: BinaryenExpressionRef, shift: BinaryenExpressionRef): BinaryenExpressionRef;
        shr_s(vec: BinaryenExpressionRef, shift: BinaryenExpressionRef): BinaryenExpressionRef;
        shr_u(vec: BinaryenExpressionRef, shift: BinaryenExpressionRef): BinaryenExpressionRef;
        add(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        sub(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        mul(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        extmul_low_i32x4_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        extmul_high_i32x4_s(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        extmul_low_i32x4_u(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        extmul_high_i32x4_u(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        extend_low_i32x4_s(value: BinaryenExpressionRef): BinaryenExpressionRef;
        extend_high_i32x4_s(value: BinaryenExpressionRef): BinaryenExpressionRef;
        extend_low_i32x4_u(value: BinaryenExpressionRef): BinaryenExpressionRef;
        extend_high_i32x4_u(value: BinaryenExpressionRef): BinaryenExpressionRef;
        
    };
    f32x4: {
        splat(value: BinaryenExpressionRef): BinaryenExpressionRef;
        extract_lane(vec: BinaryenExpressionRef, index: BinaryenExpressionRef): BinaryenExpressionRef;
        replace_lane(vec: BinaryenExpressionRef, index: BinaryenExpressionRef, value: BinaryenExpressionRef): BinaryenExpressionRef;
        eq(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        ne(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        lt(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        gt(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        le(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        ge(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        abs(value: BinaryenExpressionRef): BinaryenExpressionRef;
        neg(value: BinaryenExpressionRef): BinaryenExpressionRef;
        sqrt(value: BinaryenExpressionRef): BinaryenExpressionRef;
        add(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        sub(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        mul(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        div(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        min(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        max(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        pmin(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        pmax(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        ceil(value: BinaryenExpressionRef): BinaryenExpressionRef;
        floor(value: BinaryenExpressionRef): BinaryenExpressionRef;
        trunc(value: BinaryenExpressionRef): BinaryenExpressionRef;
        nearest(value: BinaryenExpressionRef): BinaryenExpressionRef;
        convert_i32x4_s(value: BinaryenExpressionRef): BinaryenExpressionRef;
        convert_i32x4_u(value: BinaryenExpressionRef): BinaryenExpressionRef;
        demote_f64x2_zero(value: BinaryenExpressionRef): BinaryenExpressionRef;
    };
    f64x2: {
        splat(value: BinaryenExpressionRef): BinaryenExpressionRef;
        extract_lane(vec: BinaryenExpressionRef, index: BinaryenExpressionRef): BinaryenExpressionRef;
        replace_lane(vec: BinaryenExpressionRef, index: BinaryenExpressionRef, value: BinaryenExpressionRef): BinaryenExpressionRef;
        eq(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        ne(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        lt(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        gt(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        le(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        ge(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        abs(value: BinaryenExpressionRef): BinaryenExpressionRef;
        neg(value: BinaryenExpressionRef): BinaryenExpressionRef;
        sqrt(value: BinaryenExpressionRef): BinaryenExpressionRef;
        add(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        sub(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        mul(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        div(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        min(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        max(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        pmin(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        pmax(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
        ceil(value: BinaryenExpressionRef): BinaryenExpressionRef;
        floor(value: BinaryenExpressionRef): BinaryenExpressionRef;
        trunc(value: BinaryenExpressionRef): BinaryenExpressionRef;
        nearest(value: BinaryenExpressionRef): BinaryenExpressionRef;
        convert_low_i32x4_s(value: BinaryenExpressionRef): BinaryenExpressionRef;
        convert_low_i32x4_u(value: BinaryenExpressionRef): BinaryenExpressionRef;
        promote_low_f32x4(value: BinaryenExpressionRef): BinaryenExpressionRef;
    };
    funcref: {
        pop(): BinaryenExpressionRef;
    };
    externref: {
        pop(): BinaryenExpressionRef;
    };
    anyref: {
        pop(): BinaryenExpressionRef;
    };
    eqref: {
        pop(): BinaryenExpressionRef;
    };
    i31ref: {
        pop(): BinaryenExpressionRef;
    };
    structref: {
        pop(): BinaryenExpressionRef;
    };
    stringref: {
        pop(): BinaryenExpressionRef;
    };
    ref: {
        null(type: BinaryenType): BinaryenExpressionRef;
        is_null(value: BinaryenExpressionRef): BinaryenExpressionRef;
        as_non_null(value: BinaryenExpressionRef): BinaryenExpressionRef;
        func(func: string, type: BinaryenHeapType): BinaryenExpressionRef;
        i31(value: BinaryenExpressionRef): BinaryenExpressionRef;
        eq(left: BinaryenExpressionRef, right: BinaryenExpressionRef): BinaryenExpressionRef;
    };
    select(condition: BinaryenExpressionRef, ifTrue: BinaryenExpressionRef, ifFalse: BinaryenExpressionRef): BinaryenExpressionRef;
    drop(value: BinaryenExpressionRef): BinaryenExpressionRef;
    return(value: BinaryenExpressionRef): BinaryenExpressionRef;
    nop(): BinaryenExpressionRef;
    unreachable(): BinaryenExpressionRef;

    atomic: {
        fence(): BinaryenExpressionRef;
    };

    try(name: string | null, body: BinaryenExpressionRef, catchTags: string[], catchBodies: BinaryenExpressionRef[], delegateTarget?: string): BinaryenExpressionRef;
    throw(tag: string, operands: BinaryenExpressionRef[]): BinaryenExpressionRef;
    rethrow(target: string): BinaryenExpressionRef;

    tuple: {
        make(elements: BinaryenExpressionRef[]): BinaryenExpressionRef;
        extract(tuple: BinaryenExpressionRef, index: number): BinaryenExpressionRef;
    };

    i31: {
        get_s(i31: BinaryenExpressionRef): BinaryenExpressionRef;
        get_u(i31: BinaryenExpressionRef): BinaryenExpressionRef;
    };

    // TODO: any.convert_extern
    // TODO: extern.convert_any
    // TODO: ref.test
    // TODO: ref.cast
    // TODO: br_on_*
    // TODO: struct.*
    // TODO: array.*
    // TODO: string.*

    addFunction(name: string, params: BinaryenType, results: BinaryenType, vars: BinaryenType[], body: BinaryenExpressionRef): BinaryenFunctionRef;
    getFunction(name: string): BinaryenFunctionRef;
    removeFunction(name: string): void;
    addGlobal(name: string, type: BinaryenType, mutable: boolean, init: BinaryenExpressionRef): BinaryenGlobalRef;
    getGlobal(name: string): BinaryenGlobalRef;
    addTable(table: string, initial: number, maximum: number, type?: BinaryenType): BinaryenTableRef;
    getTable(name: string): BinaryenTableRef;
    addActiveElementSegment(table: string, name: string, funcNames: string[], offset?: BinaryenExpressionRef): BinaryenElementSegmentRef;
    addPassiveElementSegment(name: string, funcNames: string[]): BinaryenElementSegmentRef;
    getElementSegment(name: string): BinaryenElementSegmentRef;
    getTableSegments(table: BinaryenTableRef): BinaryenElementSegmentRef;
    removeGlobal(name: string): void;
    removeTable(name: string): void;
    removeElementSegment(name: string): void;
    addTag(name: string, params: BinaryenType, results: BinaryenType): BinaryenTagRef;
    getTag(name: string): BinaryenTagRef;
    removeTag(name: string): void;
    addFunctionImport(internalName: string, externalModuleName: string, externalBaseName: string, params: BinaryenType, results: BinaryenType): void;
    addTableImport(internalName: string, externalModuleName: string, externalBaseName: string): void;
    addMemoryImport(internalName: string, externalModuleName: string, externalBaseName: string, shared: boolean): void;
    addGlobalImport(internalName: string, externalModuleName: string, externalBaseName: string, globalType: BinaryenType, mutable: boolean): void;
    addTagImport(internalName: string, externalModuleName: string, externalBaseName: string, params: BinaryenType, results: BinaryenType): void;
    addExport: void;
    addFunctionExport(internalName: string, externalName: string): void;
    addTableExport(internalName: string, externalName: string): void;
    addMemoryExport(internalName: string, externalName: string): void;
    addGlobalExport(internalName: string, externalName: string): void;
    addTagExport(internalName: string, externalName: string): void;
    removeExport(externalName: string): void;
    setMemory(initial: number, maximum: number, exportName: string, segments?: MemorySegment[], shared?: boolean, memory64?: boolean, internalName?: string): void;
    hasMemory(): boolean;
    getMemoryInfo(name: string): MemoryInfo;
    getNumMemorySegments(): number;
    getMemorySegmentInfo(name: string): MemorySegmentInfo;
    setStart(start: string): void;
    getStart(): BinaryenFunctionRef;
    getFeatures(): Features;
    setFeatures(features: Features): void;
    addCustomSection(name: string, contents: ArrayLike<number>): void;
    getExport(externalName: string): BinaryenExportRef;
    getNumExports(): number;
    getExportByIndex(index: number): BinaryenExportRef;
    getNumFunctions(): number;
    getFunctionByIndex(index: number): BinaryenFunctionRef;
    getNumGlobals(): number;
    getNumTables(): number;
    getNumElementSegments(): number;
    getGlobalByIndex(index: number): BinaryenGlobalRef;
    getTableByIndex(index: number): BinaryenTableRef;
    getElementSegmentByIndex(index: number): BinaryenElementSegmentRef;
    emitText(): string;
    emitStackIR(): string;
    emitAsmjs(): string;
    validate(): void;
    optimize(): void;
    optimizeFunction(func: string | BinaryenFunctionRef): void;
    runPasses(passes: Pass[]): void;
    runPassesOnFunction(func: string | BinaryenFunctionRef, passes: Pass[]): void;
    dispose(): void;
    emitBinary(): Uint8Array;
    emitBinary(sourceMapUrl: string): EmitBinaryResult;
    interpret(): void;
    addDebugInfoFileName(filename: string): number;
    getDebugInfoFileName(index: number): string;
    setDebugLocation(func: BinaryenFunctionRef, expr: BinaryenExpressionRef, fileIndex: number, lineNumber: number, columnNumber: number): void;
    copyExpression(expr: BinaryenExpressionRef): BinaryenExpressionRef;
}

export let wrapModule: void;