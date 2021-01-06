import CONFIG from '../config';
const {BaseFontSize} = CONFIG;

export function pxToRem(px: number) {
    return `${px / BaseFontSize}rem`;
}

export function pxToEm(px: number) {
    const root = 16;
    return `${px / root}em`;
}

export function ensureNotPx(unit: number | string) {
    if (typeof unit === 'string') {
        if (unit.includes('px')) {
            const val = parseFloat(unit.replace('px', ''));
            unit = pxToRem(val);
        }
    } else {
        unit = pxToRem(unit);
    }
    return unit;
}

export function ensureNotPxEm(unit: number | string) {
    if (typeof unit === 'string') {
        if (unit.includes('px')) {
            const val = parseFloat(unit.replace('px', ''));
            unit = pxToRem(val);
        }
    } else {
        unit = pxToEm(unit);
    }
    return unit;
}
