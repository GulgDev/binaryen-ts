import * as ExpressionIds from "./ids";
import { BinaryenType } from "./types";

declare const __BinaryenExpressionRef: unique symbol;
/* @binaryen-ts */ export type BinaryenExpressionRef = number & { [__BinaryenExpressionRef]: void };

declare const __BinaryenExpressionId: unique symbol;
/* @binaryen-ts */ export type BinaryenExpressionId = number & { [__BinaryenExpressionId]: void };

export function getExpressionId(expr: BinaryenExpressionRef): BinaryenExpressionId;
export function getExpressionType(expr: BinaryenExpressionRef): BinaryenType;
export function getExpressionInfo(expr: BinaryenExpressionRef): /* TODO */ any;

export { ExpressionIds };
export * from "./ids";