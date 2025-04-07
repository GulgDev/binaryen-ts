import { BinaryenExpressionRef } from "./expressions";
import { Module } from "./module";

declare const __ExpressionRunnerRef: unique symbol;
/* @binaryen-ts */ export type ExpressionRunnerRef = number & { [__ExpressionRunnerRef]: void };

export class ExpressionRunner {
    readonly ptr: ExpressionRunnerRef;

    constructor(module: Module, flags: /* TODO */ any, maxDepth: number, maxLoopIterations: number);

    setLocalValue(index: number, valueExpr: BinaryenExpressionRef): boolean;
    setGlobalValue(name: string, valueExpr: BinaryenExpressionRef): boolean;
    runAndDispose(expr: BinaryenExpressionRef): BinaryenExpressionRef;
}