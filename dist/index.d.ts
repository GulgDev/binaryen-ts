declare const __BinaryenExpressionRef: unique symbol;
type BinaryenExpressionRef = number & { [__BinaryenExpressionRef]: void };

declare const __BinaryenType: unique symbol;
type BinaryenType = number & { [__BinaryenType]: void };

declare const none: BinaryenType;
declare const i32: BinaryenType;
declare const i64: BinaryenType;
declare const f32: BinaryenType;
declare const f64: BinaryenType;
declare const v128: BinaryenType;
declare const funcref: BinaryenType;
declare const externref: BinaryenType;
declare const anyref: BinaryenType;
declare const eqref: BinaryenType;
declare const i31ref: BinaryenType;
declare const structref: BinaryenType;
declare const stringref: BinaryenType;
declare const unreachable: BinaryenType;
declare const auto: BinaryenType;

declare const __BinaryenHeapType: unique symbol;
type BinaryenHeapType = number & { [__BinaryenHeapType]: void };

declare function createType(types: BinaryenType[]): BinaryenType;
declare function expandType(ty: BinaryenType): BinaryenType[];

declare const __BinaryenModuleRef: unique symbol;
/* @binaryen-ts */ type BinaryenModuleRef = number & { [__BinaryenModuleRef]: void };

declare class Module {
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
    return_call(name: string, operands: BinaryenExpressionRef[], type: BinaryenType): BinaryenExpressionRef;
    return_call_indirect(table: string, target: BinaryenExpressionRef, operands: BinaryenExpressionRef[], params: BinaryenType, results: BinaryenType): BinaryenExpressionRef;
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
        extend_8s(value: BinaryenExpressionRef): BinaryenExpressionRef;
        extend_16s(value: BinaryenExpressionRef): BinaryenExpressionRef;
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
        extend_8s(value: BinaryenExpressionRef): BinaryenExpressionRef;
        extend_16s(value: BinaryenExpressionRef): BinaryenExpressionRef;
        extend_32s(value: BinaryenExpressionRef): BinaryenExpressionRef;
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
    // TODO: v128.*, i*x*.*, f*x*.*
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

    // TODO: any.convert_extern
    // TODO: extern.convert_any
    // TODO: ref.test
    // TODO: ref.cast
    // TODO: br_on_*
    // TODO: struct.*
    // TODO: array.*
    // TODO: string.*
}

export { type BinaryenHeapType, type BinaryenModuleRef, type BinaryenType, Module, anyref, auto, createType, eqref, expandType, externref, f32, f64, funcref, i31ref, i32, i64, none, stringref, structref, unreachable, v128 };
