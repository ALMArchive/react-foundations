import {BasePositionProps} from '../types';
import {mediaManager, scale} from '../utilities';
import {CSSProperties} from 'react';

export type PaddingerProps = BasePositionProps;

export function Paddinger({top, bottom, left, right}: PaddingerProps) {
    const bp = mediaManager.active;
    const out: CSSProperties = {};
    if(top !== null && top !== undefined) out.paddingTop = scale(bp, top);
    if(bottom !== null && bottom !== undefined) out.paddingBottom = scale(bp, bottom);
    if(left !== null && left !== undefined) out.paddingLeft = scale(bp, left);
    if(right !== null && right !== undefined) out.paddingRight = scale(bp, right);
    return out;
}

interface PaddingerPresetsProps {
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
}

export const PaddingerPresets: PaddingerPresetsProps = {
    _N1: Paddinger({top: -1, bottom: -1, left: -1, right: -1}),
    _N2: Paddinger({top: -2, bottom: -2, left: -2, right: -2}),
    _N3: Paddinger({top: -3, bottom: -3, left: -3, right: -3}),
    _0: Paddinger({top: 0, bottom: 0, left: 0, right: 0}),
    _1: Paddinger({top: 1, bottom: 1, left: 1, right: 1}),
    _2: Paddinger({top: 2, bottom: 2, left: 2, right: 2}),
    _3: Paddinger({top: 3, bottom: 3, left: 3, right: 3}),
    _4: Paddinger({top: 4, bottom: 4, left: 4, right: 4}),
    _5: Paddinger({top: 5, bottom: 5, left: 5, right: 5}),
    _6: Paddinger({top: 6, bottom: 6, left: 6, right: 6})
}
