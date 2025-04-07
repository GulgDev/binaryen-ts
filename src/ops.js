import binaryen from "./binaryen";

export let {
    ClzInt32,
    CtzInt32,
    PopcntInt32,
    NegFloat32,
    AbsFloat32,
    CeilFloat32,
    FloorFloat32,
    TruncFloat32,
    NearestFloat32,
    SqrtFloat32,
    EqZInt32,
    ClzInt64,
    CtzInt64,
    PopcntInt64,
    NegFloat64,
    AbsFloat64,
    CeilFloat64,
    FloorFloat64,
    TruncFloat64,
    NearestFloat64,
    SqrtFloat64,
    EqZInt64,
    ExtendSInt32,
    ExtendUInt32,
    WrapInt64,
    TruncSFloat32ToInt32,
    TruncSFloat32ToInt64,
    TruncUFloat32ToInt32,
    TruncUFloat32ToInt64,
    TruncSFloat64ToInt32,
    TruncSFloat64ToInt64,
    TruncUFloat64ToInt32,
    TruncUFloat64ToInt64,
    TruncSatSFloat32ToInt32,
    TruncSatSFloat32ToInt64,
    TruncSatUFloat32ToInt32,
    TruncSatUFloat32ToInt64,
    TruncSatSFloat64ToInt32,
    TruncSatSFloat64ToInt64,
    TruncSatUFloat64ToInt32,
    TruncSatUFloat64ToInt64,
    ReinterpretFloat32,
    ReinterpretFloat64,
    ConvertSInt32ToFloat32,
    ConvertSInt32ToFloat64,
    ConvertUInt32ToFloat32,
    ConvertUInt32ToFloat64,
    ConvertSInt64ToFloat32,
    ConvertSInt64ToFloat64,
    ConvertUInt64ToFloat32,
    ConvertUInt64ToFloat64,
    PromoteFloat32,
    DemoteFloat64,
    ReinterpretInt32,
    ReinterpretInt64,
    ExtendS8Int32,
    ExtendS16Int32,
    ExtendS8Int64,
    ExtendS16Int64,
    ExtendS32Int64,
    AddInt32,
    SubInt32,
    MulInt32,
    DivSInt32,
    DivUInt32,
    RemSInt32,
    RemUInt32,
    AndInt32,
    OrInt32,
    XorInt32,
    ShlInt32,
    ShrUInt32,
    ShrSInt32,
    RotLInt32,
    RotRInt32,
    EqInt32,
    NeInt32,
    LtSInt32,
    LtUInt32,
    LeSInt32,
    LeUInt32,
    GtSInt32,
    GtUInt32,
    GeSInt32,
    GeUInt32,
    AddInt64,
    SubInt64,
    MulInt64,
    DivSInt64,
    DivUInt64,
    RemSInt64,
    RemUInt64,
    AndInt64,
    OrInt64,
    XorInt64,
    ShlInt64,
    ShrUInt64,
    ShrSInt64,
    RotLInt64,
    RotRInt64,
    EqInt64,
    NeInt64,
    LtSInt64,
    LtUInt64,
    LeSInt64,
    LeUInt64,
    GtSInt64,
    GtUInt64,
    GeSInt64,
    GeUInt64,
    AddFloat32,
    SubFloat32,
    MulFloat32,
    DivFloat32,
    CopySignFloat32,
    MinFloat32,
    MaxFloat32,
    EqFloat32,
    NeFloat32,
    LtFloat32,
    LeFloat32,
    GtFloat32,
    GeFloat32,
    AddFloat64,
    SubFloat64,
    MulFloat64,
    DivFloat64,
    CopySignFloat64,
    MinFloat64,
    MaxFloat64,
    EqFloat64,
    NeFloat64,
    LtFloat64,
    LeFloat64,
    GtFloat64,
    GeFloat64,
    AtomicRMWAdd,
    AtomicRMWSub,
    AtomicRMWAnd,
    AtomicRMWOr,
    AtomicRMWXor,
    AtomicRMWXchg,
    SplatVecI8x16,
    ExtractLaneSVecI8x16,
    ExtractLaneUVecI8x16,
    ReplaceLaneVecI8x16,
    SplatVecI16x8,
    ExtractLaneSVecI16x8,
    ExtractLaneUVecI16x8,
    ReplaceLaneVecI16x8,
    SplatVecI32x4,
    ExtractLaneVecI32x4,
    ReplaceLaneVecI32x4,
    SplatVecI64x2,
    ExtractLaneVecI64x2,
    ReplaceLaneVecI64x2,
    SplatVecF32x4,
    ExtractLaneVecF32x4,
    ReplaceLaneVecF32x4,
    SplatVecF64x2,
    ExtractLaneVecF64x2,
    ReplaceLaneVecF64x2,
    EqVecI8x16,
    NeVecI8x16,
    LtSVecI8x16,
    LtUVecI8x16,
    GtSVecI8x16,
    GtUVecI8x16,
    LeSVecI8x16,
    LeUVecI8x16,
    GeSVecI8x16,
    GeUVecI8x16,
    EqVecI16x8,
    NeVecI16x8,
    LtSVecI16x8,
    LtUVecI16x8,
    GtSVecI16x8,
    GtUVecI16x8,
    LeSVecI16x8,
    LeUVecI16x8,
    GeSVecI16x8,
    GeUVecI16x8,
    EqVecI32x4,
    NeVecI32x4,
    LtSVecI32x4,
    LtUVecI32x4,
    GtSVecI32x4,
    GtUVecI32x4,
    LeSVecI32x4,
    LeUVecI32x4,
    GeSVecI32x4,
    GeUVecI32x4,
    EqVecI64x2,
    NeVecI64x2,
    LtSVecI64x2,
    GtSVecI64x2,
    LeSVecI64x2,
    GeSVecI64x2,
    EqVecF32x4,
    NeVecF32x4,
    LtVecF32x4,
    GtVecF32x4,
    LeVecF32x4,
    GeVecF32x4,
    EqVecF64x2,
    NeVecF64x2,
    LtVecF64x2,
    GtVecF64x2,
    LeVecF64x2,
    GeVecF64x2,
    NotVec128,
    AndVec128,
    OrVec128,
    XorVec128,
    AndNotVec128,
    BitselectVec128,
    RelaxedMaddVecF32x4,
    RelaxedNmaddVecF32x4,
    RelaxedMaddVecF64x2,
    RelaxedNmaddVecF64x2,
    LaneselectI8x16,
    LaneselectI16x8,
    LaneselectI32x4,
    LaneselectI64x2,
    DotI8x16I7x16AddSToVecI32x4,
    AnyTrueVec128,
    PopcntVecI8x16,
    AbsVecI8x16,
    NegVecI8x16,
    AllTrueVecI8x16,
    BitmaskVecI8x16,
    ShlVecI8x16,
    ShrSVecI8x16,
    ShrUVecI8x16,
    AddVecI8x16,
    AddSatSVecI8x16,
    AddSatUVecI8x16,
    SubVecI8x16,
    SubSatSVecI8x16,
    SubSatUVecI8x16,
    MinSVecI8x16,
    MinUVecI8x16,
    MaxSVecI8x16,
    MaxUVecI8x16,
    AvgrUVecI8x16,
    AbsVecI16x8,
    NegVecI16x8,
    AllTrueVecI16x8,
    BitmaskVecI16x8,
    ShlVecI16x8,
    ShrSVecI16x8,
    ShrUVecI16x8,
    AddVecI16x8,
    AddSatSVecI16x8,
    AddSatUVecI16x8,
    SubVecI16x8,
    SubSatSVecI16x8,
    SubSatUVecI16x8,
    MulVecI16x8,
    MinSVecI16x8,
    MinUVecI16x8,
    MaxSVecI16x8,
    MaxUVecI16x8,
    AvgrUVecI16x8,
    Q15MulrSatSVecI16x8,
    ExtMulLowSVecI16x8,
    ExtMulHighSVecI16x8,
    ExtMulLowUVecI16x8,
    ExtMulHighUVecI16x8,
    DotSVecI16x8ToVecI32x4,
    ExtMulLowSVecI32x4,
    ExtMulHighSVecI32x4,
    ExtMulLowUVecI32x4,
    ExtMulHighUVecI32x4,
    AbsVecI32x4,
    NegVecI32x4,
    AllTrueVecI32x4,
    BitmaskVecI32x4,
    ShlVecI32x4,
    ShrSVecI32x4,
    ShrUVecI32x4,
    AddVecI32x4,
    SubVecI32x4,
    MulVecI32x4,
    MinSVecI32x4,
    MinUVecI32x4,
    MaxSVecI32x4,
    MaxUVecI32x4,
    AbsVecI64x2,
    NegVecI64x2,
    AllTrueVecI64x2,
    BitmaskVecI64x2,
    ShlVecI64x2,
    ShrSVecI64x2,
    ShrUVecI64x2,
    AddVecI64x2,
    SubVecI64x2,
    MulVecI64x2,
    ExtMulLowSVecI64x2,
    ExtMulHighSVecI64x2,
    ExtMulLowUVecI64x2,
    ExtMulHighUVecI64x2,
    AbsVecF32x4,
    NegVecF32x4,
    SqrtVecF32x4,
    AddVecF32x4,
    SubVecF32x4,
    MulVecF32x4,
    DivVecF32x4,
    MinVecF32x4,
    MaxVecF32x4,
    PMinVecF32x4,
    PMaxVecF32x4,
    CeilVecF32x4,
    FloorVecF32x4,
    TruncVecF32x4,
    NearestVecF32x4,
    AbsVecF64x2,
    NegVecF64x2,
    SqrtVecF64x2,
    AddVecF64x2,
    SubVecF64x2,
    MulVecF64x2,
    DivVecF64x2,
    MinVecF64x2,
    MaxVecF64x2,
    PMinVecF64x2,
    PMaxVecF64x2,
    CeilVecF64x2,
    FloorVecF64x2,
    TruncVecF64x2,
    NearestVecF64x2,
    ExtAddPairwiseSVecI8x16ToI16x8,
    ExtAddPairwiseUVecI8x16ToI16x8,
    ExtAddPairwiseSVecI16x8ToI32x4,
    ExtAddPairwiseUVecI16x8ToI32x4,
    TruncSatSVecF32x4ToVecI32x4,
    TruncSatUVecF32x4ToVecI32x4,
    ConvertSVecI32x4ToVecF32x4,
    ConvertUVecI32x4ToVecF32x4,
    Load8SplatVec128,
    Load16SplatVec128,
    Load32SplatVec128,
    Load64SplatVec128,
    Load8x8SVec128,
    Load8x8UVec128,
    Load16x4SVec128,
    Load16x4UVec128,
    Load32x2SVec128,
    Load32x2UVec128,
    Load32ZeroVec128,
    Load64ZeroVec128,
    Load8LaneVec128,
    Load16LaneVec128,
    Load32LaneVec128,
    Load64LaneVec128,
    Store8LaneVec128,
    Store16LaneVec128,
    Store32LaneVec128,
    Store64LaneVec128,
    NarrowSVecI16x8ToVecI8x16,
    NarrowUVecI16x8ToVecI8x16,
    NarrowSVecI32x4ToVecI16x8,
    NarrowUVecI32x4ToVecI16x8,
    ExtendLowSVecI8x16ToVecI16x8,
    ExtendHighSVecI8x16ToVecI16x8,
    ExtendLowUVecI8x16ToVecI16x8,
    ExtendHighUVecI8x16ToVecI16x8,
    ExtendLowSVecI16x8ToVecI32x4,
    ExtendHighSVecI16x8ToVecI32x4,
    ExtendLowUVecI16x8ToVecI32x4,
    ExtendHighUVecI16x8ToVecI32x4,
    ExtendLowSVecI32x4ToVecI64x2,
    ExtendHighSVecI32x4ToVecI64x2,
    ExtendLowUVecI32x4ToVecI64x2,
    ExtendHighUVecI32x4ToVecI64x2,
    ConvertLowSVecI32x4ToVecF64x2,
    ConvertLowUVecI32x4ToVecF64x2,
    TruncSatZeroSVecF64x2ToVecI32x4,
    TruncSatZeroUVecF64x2ToVecI32x4,
    DemoteZeroVecF64x2ToVecF32x4,
    PromoteLowVecF32x4ToVecF64x2,
    RelaxedTruncSVecF32x4ToVecI32x4,
    RelaxedTruncUVecF32x4ToVecI32x4,
    RelaxedTruncZeroSVecF64x2ToVecI32x4,
    RelaxedTruncZeroUVecF64x2ToVecI32x4,
    SwizzleVecI8x16,
    RelaxedSwizzleVecI8x16,
    RelaxedMinVecF32x4,
    RelaxedMaxVecF32x4,
    RelaxedMinVecF64x2,
    RelaxedMaxVecF64x2,
    RelaxedQ15MulrSVecI16x8,
    DotI8x16I7x16SToVecI16x8,
    RefAsNonNull,
    RefAsExternInternalize,
    RefAsExternExternalize,
    RefAsAnyConvertExtern,
    RefAsExternConvertAny,
    BrOnNull,
    BrOnNonNull,
    BrOnCast,
    BrOnCastFail,
    StringNewLossyUTF8Array,
    StringNewWTF16Array,
    StringNewFromCodePoint,
    StringMeasureUTF8,
    StringMeasureWTF16,
    StringEncodeLossyUTF8Array,
    StringEncodeWTF16Array,
    StringEqEqual,
    StringEqCompare
} = binaryen;