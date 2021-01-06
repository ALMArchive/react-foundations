import {CSSProperties} from 'react';

export enum BorderStyle {
    None = 'none',
    Hidden = 'hidden',
    Dotted = 'dotted',
    Dashed = 'dashed',
    Solid = 'solid',
    Double = 'double',
    Groove = 'groove',
    Ridge = 'ridge',
    Inset = 'inset',
    Outset = 'outset',
    Initial = 'initial',
    Inherit = 'inherit',
}

export enum BorderDirections {
    All = 'All',
    Right = 'Right',
    Left = 'Left',
    Bottom = 'Bottom',
    Top = 'Top'
}

export interface BordererProps {
    borderStyle?: BorderStyle;
    borderWidth?: number | string;
    borderColor?: string;
    borderRadius?: number | string;
}

function addProps(props, direction) {
    const out = {};
    if (props.borderStyle) out[`border${direction}Style`] = props.borderStyle;
    if (props.borderWidth) out[`border${direction}Width`] = props.borderWidth;
    if (props.borderColor) out[`border${direction}Color`] = props.borderColor;
    if (props.borderRadius) out[`border${direction}Radius`] = props.borderRadius;
    return out;
}

export function Borderer(props: BordererProps = {}, direction: BorderDirections | Array<BorderDirections> = BorderDirections.All): CSSProperties {
    if (Array.isArray((direction))) {
        if (direction.includes(BorderDirections.All)) return props;
        const out = {};
        for (const tmpDir of direction) {
            Object.assign(out, addProps(props, direction));
        }
        return out;
    } else {
        if (direction === BorderDirections.All) {
            return props;
        } else if (direction === BorderDirections.Left) {
            return addProps(props, direction);
        }
    }
    return props;
}

interface BordererPresetsProps {
    readonly _2: CSSProperties;
    readonly _4: CSSProperties;
    readonly _8: CSSProperties;
    readonly P50: CSSProperties;
}

export const BordererPresets: BordererPresetsProps = {
    _2: Borderer({borderRadius: 2}),
    _4: Borderer({borderRadius: 4}),
    _8: Borderer({borderRadius: 8}),
    P50: Borderer({borderRadius: '50%'})
}
