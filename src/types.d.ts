declare const __BinaryenType: unique symbol;
/* @binaryen-ts */ export type BinaryenType = number & { [__BinaryenType]: void };

export const none: BinaryenType;
export const i32: BinaryenType;
export const i64: BinaryenType;
export const f32: BinaryenType;
export const f64: BinaryenType;
export const v128: BinaryenType;
export const funcref: BinaryenType;
export const externref: BinaryenType;
export const anyref: BinaryenType;
export const eqref: BinaryenType;
export const i31ref: BinaryenType;
export const structref: BinaryenType;
export const stringref: BinaryenType;
export const unreachable: BinaryenType;
export const auto: BinaryenType;

declare const __BinaryenHeapType: unique symbol;
/* @binaryen-ts */ export type BinaryenHeapType = number & { [__BinaryenHeapType]: void };

export function createType(types: BinaryenType[]): BinaryenType;
export function expandType(ty: BinaryenType): BinaryenType[];