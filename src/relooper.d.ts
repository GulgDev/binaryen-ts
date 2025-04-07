import { BinaryenExpressionRef } from "./expressions";
import { Module } from "./module";

declare const __RelooperRef: unique symbol;
/* @binaryen-ts */ export type RelooperRef = number & { [__RelooperRef]: void };

declare const __RelooperBlockRef: unique symbol;
/* @binaryen-ts */ export type RelooperBlockRef = number & { [__RelooperBlockRef]: void };

export class Relooper {
    readonly ptr: RelooperRef;

    constructor(module: Module);

    addBlock(code: BinaryenExpressionRef): RelooperBlockRef;
    addBranch(from: RelooperBlockRef, to: RelooperBlockRef, condition: BinaryenExpressionRef, code: BinaryenExpressionRef): void;
    addBlockWithSwitch(code: BinaryenExpressionRef, condition: BinaryenExpressionRef): RelooperBlockRef;
    addBranchForSwitch(from: RelooperBlockRef, to: RelooperBlockRef, indexes: number[], code: BinaryenExpressionRef): void;
    renderAndDispose(entry: RelooperBlockRef, labelHelper: number): BinaryenExpressionRef;
}