import * as ExpressionIds from "./ids";

declare const __BinaryenExpressionRef: unique symbol;
/* @binaryen-ts */ export type BinaryenExpressionRef = number & { [__BinaryenExpressionRef]: void };

declare const __BinaryenExpressionId: unique symbol;
/* @binaryen-ts */ export type BinaryenExpressionId = number & { [__BinaryenExpressionId]: void };

export { ExpressionIds };
export * from "./ids";