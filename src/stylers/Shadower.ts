import {ensureNotPx} from '../utilities';
import {CSSProperties} from 'react';

export interface ShadowerProps {
    hoffset?: number | string;
    voffset?: number | string;
    blur?: number | string;
    spread?: number | string;
    color?: string;
}

function processShadowProps(props: ShadowerProps): ShadowerProps {
    const {hoffset = 0, voffset = 0, blur = 0, spread = 0, color = 'rgba(0, 0, 0, .8)'} = props;
    return {
        hoffset: ensureNotPx(hoffset),
        voffset: ensureNotPx(voffset),
        blur: ensureNotPx(blur),
        spread: ensureNotPx(spread),
        color
    };
}

export function Shadower(props: ShadowerProps = {}) {
    const {hoffset, voffset, blur, spread, color} = processShadowProps(props);
    const boxShadow = `${hoffset} ${voffset} ${blur} ${spread} ${color}`;
    return {boxShadow};
}

interface ShadowPresetsProps {
    readonly Blur1: CSSProperties;
    readonly Blur2: CSSProperties;
    readonly Blur4: CSSProperties;
    readonly Blur6: CSSProperties;
    readonly Blur8: CSSProperties;
    readonly Blur16: CSSProperties;
    readonly Blur32: CSSProperties;
    readonly Blur64: CSSProperties;
}

export const ShadowerPresets: ShadowPresetsProps = {
    Blur1: Shadower({blur: 1}),
    Blur2: Shadower({blur: 2}),
    Blur4: Shadower({blur: 4}),
    Blur6: Shadower({blur: 6}),
    Blur8: Shadower({blur: 8}),
    Blur16: Shadower({blur: 16}),
    Blur32: Shadower({blur: 32}),
    Blur64: Shadower({blur: 64}),
};
