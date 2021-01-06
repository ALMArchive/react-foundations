import {BasePositionProps} from '../types';
import {mediaManager, scale} from '../utilities';
import {CSSProperties} from 'react';

export type MarginerProps = BasePositionProps;

export function Marginer({top, bottom, left, right}: MarginerProps) {
    const bp = mediaManager.active;
    const out: CSSProperties = {};
    if(top !== null && top !== undefined) out.marginTop = scale(bp, top);
    if(bottom !== null && bottom !== undefined) out.marginBottom = scale(bp, bottom);
    if(left !== null && left !== undefined) out.marginLeft = scale(bp, left);
    if(right !== null && right !== undefined) out.marginRight = scale(bp, right);
    return out;
}

interface MarginerPresetsProps {
    readonly _N3: CSSProperties;
    readonly _N2: CSSProperties;
    readonly _N1: CSSProperties;
    readonly _0: CSSProperties;
    readonly _1: CSSProperties;
    readonly _2: CSSProperties;
    readonly _3: CSSProperties;
    readonly _4: CSSProperties;
    readonly _5: CSSProperties;
    readonly _6: CSSProperties;
    readonly auto: CSSProperties;
    readonly auto_N3: CSSProperties;
    readonly auto_N2: CSSProperties;
    readonly auto_N1: CSSProperties;
    readonly auto_0: CSSProperties;
    readonly auto_1: CSSProperties;
    readonly auto_2: CSSProperties;
    readonly auto_3: CSSProperties;
    readonly auto_4: CSSProperties;
    readonly auto_5: CSSProperties;
    readonly auto_6: CSSProperties;
}

export const MarginerPresets: MarginerPresetsProps = {
    _N1: Marginer({top: -1, bottom: -1, left: -1, right: -1}),
    _N2: Marginer({top: -2, bottom: -2, left: -2, right: -2}),
    _N3: Marginer({top: -3, bottom: -3, left: -3, right: -3}),
    _0: Marginer({top: 0, bottom: 0, left: 0, right: 0}),
    _1: Marginer({top: 1, bottom: 1, left: 1, right: 1}),
    _2: Marginer({top: 2, bottom: 2, left: 2, right: 2}),
    _3: Marginer({top: 3, bottom: 3, left: 3, right: 3}),
    _4: Marginer({top: 4, bottom: 4, left: 4, right: 4}),
    _5: Marginer({top: 5, bottom: 5, left: 5, right: 5}),
    _6: Marginer({top: 6, bottom: 6, left: 6, right: 6}),
    auto: Marginer({left: 'auto', right: 'auto'}),
    auto_N1: Marginer({top: -1, bottom: -1, left: 'auto', right: 'auto'}),
    auto_N2: Marginer({top: -2, bottom: -2, left: 'auto', right: 'auto'}),
    auto_N3: Marginer({top: -3, bottom: -3, left: 'auto', right: 'auto'}),
    auto_0: Marginer({top: 0, bottom: 0, left: 'auto', right: 'auto'}),
    auto_1: Marginer({top: 1, bottom: 1, left: 'auto', right: 'auto'}),
    auto_2: Marginer({top: 2, bottom: 2, left: 'auto', right: 'auto'}),
    auto_3: Marginer({top: 3, bottom: 3, left: 'auto', right: 'auto'}),
    auto_4: Marginer({top: 4, bottom: 4, left: 'auto', right: 'auto'}),
    auto_5: Marginer({top: 5, bottom: 5, left: 'auto', right: 'auto'}),
    auto_6: Marginer({top: 6, bottom: 6, left: 'auto', right: 'auto'}),

}
