import {scaledSize, useBreakpoint} from '../utilities';
import CONFIG from '../config';

const {LineHeightFactor} = CONFIG;

export enum FontVariant {
    Normal = 'normal',
    SmallCaps = 'small-caps'
}

export enum FontStyle {
    Normal = 'normal',
    Italic = 'italic',
    Oblique = 'oblique'
}

export enum FontWeight {
    Normal = 'normal',
    Bold = 'bold',
    Bolder = 'bolder',
    Lighter = 'lighter',
    W1 = 100,
    W2 = 200,
    W3 = 300,
    W4 = 400,
    W5 = 500,
    W6 = 600,
    W7 = 700,
    W8 = 800,
    W9 = 900
}

export enum TextAlign {
    Center = 'center',
    Left = 'left',
    Right = 'right',
    Justify = 'justify'
}

export interface FonterProps {
    level?: number;
    breakpoint?: number;
    color?: string;
    fontVariant?: FontVariant;
    fontStyle?: FontStyle;
    fontWeight?: FontWeight;
    textAlign?: TextAlign;
    fontSize?: number | string;
    lineHeight?: number | string;
    fontFamily?: string;
    letterSpacing?: number | string;
}

export function Fonter(param: FonterProps) {
    const {level, ...rest} = param;
    const breakpoint = useBreakpoint();
    if(typeof level === 'number' && typeof breakpoint === 'number') {
        const fontSize = scaledSize(breakpoint, level);
        const lineHeight = fontSize * LineHeightFactor;
        return {...rest, fontSize, lineHeight};
    }
    return rest;
}
