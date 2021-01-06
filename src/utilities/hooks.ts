import {CSSProperties, useEffect, useRef, useState} from 'react';
import styleManager from './style_manager';
import {mediaManager} from './media_query_manager';
import {ensureNotPx} from './utilities-conversions';
import idManager from './id_manager';

export function useStyle(selector: string, styles: CSSProperties) {
    const convertedStyles = convertStylesToRem(styles);
    useEffect(() => {
        const capturedSelector = selector;
        styleManager.insertRule(capturedSelector, convertedStyles);
        return () => {
            styleManager.removeRule(capturedSelector);
        }
    }, [selector, JSON.stringify(styles)]);
}

export function useStyles(styles: { [key: string]: CSSProperties }, base: string = '') {
    useEffect(() => {
        for (const style of Object.keys(styles)) {
            const selector = (base ? `${base}` : '') + style;
            const convertedStyles = styles[style];
            styleManager.insertRule(selector, convertedStyles);
        }
        return () => {
            for (const style of Object.keys(styles)) {
                const selector = (base ? `${base}` : '') + style;
                styleManager.removeRule(selector);
            }
        }
    }, [JSON.stringify(styles), base]);
}

export function useAnonymousStyle(styles: CSSProperties, subSelector: string = '') {
    const ref = useRef<string>(idManager.next());
    const selector = `.${ref.current}${subSelector}`;
    useStyle(selector, styles);
    return ref.current;
}

export function useBreakpoint() {
    const [breakPoint, setBreakPoint] = useState<number>(mediaManager.active);
    useEffect(() => {
        const handler = () => setBreakPoint(mediaManager.active);
        mediaManager.addEventListener('change', handler);
        return () => mediaManager.removeEventListener('change', handler);
    }, []);
    return breakPoint;
}

const GRAB_PX_REGEX = /(\d+)px/g;
const RegReplacer = require('regreplacer').default;
const regRep = new RegReplacer(GRAB_PX_REGEX);

const SHOULD_CONVERT: { [key: string]: boolean } = {
    borderRadius: true,
    borderWidth: true,
    maxWidth: true,
    width: true,
    height: true,
    transformOrigin: true,
    margin: true,
    marginLeft: true,
    marginRight: true,
    marginBottom: true,
    marginTop: true,
    padding: true,
    paddingLeft: true,
    paddingRight: true,
    paddingBottom: true,
    paddingTop: true,
    fontSize: true,
    lineHeight: true,
    borderBottomRightRadius: true,
    borderBottomLeftRadius: true,
    minWidth: true,
    top: true,
    bottom: true,
    left: true,
    right: true,
};

function convertStyleToRem(styleName: string, styleValue: string | number) {
    let out = styleValue;
    if (SHOULD_CONVERT[styleName]) {
        if (typeof styleValue === 'string') {
            const matches = regRep.match(styleValue);
            if (matches.hasMatches) {
                out = matches.replace(matches.matches.map(ensureNotPx), 'matches');
            }
        } else {
            out = ensureNotPx(styleValue);
            if(out === 'NaNrem') {
                console.log(styleName);
                console.log(styleValue);
            }
        }
    }
    return out;
}

function convertStylesToRem(styles: CSSProperties) {
    const out: { [key: string]: string | number } = {};
    for (const [key, value] of Object.entries(styles)) {
        out[key] = convertStyleToRem(key, value);
    }
    return out;
}
