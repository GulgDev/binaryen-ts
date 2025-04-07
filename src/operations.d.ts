import * as Operations from "./ops";

declare const __BinaryenOp: unique symbol;
/* @binaryen-ts */ export type BinaryenOp = number & { [__BinaryenOp]: void };

export { Operations };
export * from "./ops";