import {SyntheticEvent} from 'react';
import {EventHandler} from '../types';
import {BreakPointRatioMap} from './media_query_manager';
import {ratioToPower} from './ratios';
import CONFIG from '../config';

const {BaseFontSize, SizeLevelOffset} = CONFIG;

export function targetOnly(fn: EventHandler): EventHandler {
    return (e: SyntheticEvent) => {
        if (e.target === e.currentTarget) {
            e.stopPropagation();
            fn(e);
            return;
        }
        e.stopPropagation();
    }
}

export function shallowObjectCompare(prevProps: any, nextProps: any) {
    const keys1 = Object.keys(prevProps).sort();
    const keys2 = Object.keys(nextProps).sort();
    if (keys1.length !== keys2.length) return false;
    for (const key of keys1) {
        const prev = prevProps[key];
        const next = nextProps[key];
        if (!(key in nextProps)) {
            return false;
        } else {
            const type = typeof prev;
            if (typeof type === 'object') {
                if (typeof next !== 'object') return false;
                if (Array.isArray(prev) && !Array.isArray(next)) {
                    return false;
                }
            } else {
                if (type !== typeof next) return false;
            }
        }
    }

    for (const key of keys1) {
        const prev = prevProps[key];
        const next = nextProps[key];
        const type = typeof prev;
        switch (type) {
            case 'function': return false;
            case 'boolean':
                if (prev !== next) return false;
                break;
            case 'number':
                if (prev !== next) return false;
                break;
            case 'string':
                if (prev !== next) return false;
                break;
            case 'object': {
                if (Array.isArray(prev)) {
                    for (let i = 0; i < prev.length; i++) {
                        if (prev[i] !== next[i]) return false;
                    }
                } else {
                    const subKeys1 = Object.keys(prev);
                    const subKeys2 = Object.keys(next);
                    if (subKeys1.length !== subKeys2.length) return false;
                    for (const key of subKeys1) {
                        if (!(key in next)) {
                            return false;
                        } else {
                            if (prev[key] !== next[key]) return false;
                        }
                    }
                }
            }
        }
    }
    return true;
}

export function scaledSize(breakpoint: number, level: number) {
    const ratio = BreakPointRatioMap.get(breakpoint);
    const finalLevel = level - SizeLevelOffset;
    return BaseFontSize * ratioToPower(ratio, finalLevel);
}

export const scale = (breakpoint, pos) => {
    return typeof pos === 'number' ? scaledSize(breakpoint, pos) : pos;
}
