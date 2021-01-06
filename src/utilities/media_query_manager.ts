import {MediaQueryManager} from './MediaQueryManager';
import {BreakpointNone} from './MediaQueryManager';

import CONFIG from '../config';
import {Ratios, ratioToPower} from './ratios';
const {BaseViewWidth} = CONFIG;

const newBreaks = [-3, -2, -1, 0, 1, 2].map(e => BaseViewWidth * ratioToPower(Ratios.PerfectFifth, e));
export const mediaManager = new MediaQueryManager(newBreaks);

const [BreakpointXSmall, BreakpointSmall, BreakpointMedium, BreakpointLarge, BreakpointXL, BreakpointXXL] = mediaManager.breaks;

const BreakPointRatioMap = new Map<number, number>();
BreakPointRatioMap.set(BreakpointXSmall, Ratios.MinorThird);
BreakPointRatioMap.set(BreakpointSmall, Ratios.MajorThird);
BreakPointRatioMap.set(BreakpointMedium, Ratios.PerfectFourth);
BreakPointRatioMap.set(BreakpointLarge, Ratios.DiminishedFifth);
BreakPointRatioMap.set(BreakpointXL, Ratios.AugmentedFourth);
BreakPointRatioMap.set(BreakpointXXL, Ratios.PerfectFifth);

export function shiftBreakpoint(breakpoint: number, shift: number) {
    const index = mediaManager.breaks.indexOf(breakpoint);
    if(index === -1) throw new Error('Invalid breakpoint');
    const shiftedIndex = index + shift;
    if(shiftedIndex < 0) {
        return mediaManager.breaks[0];
    } if(shiftedIndex >= mediaManager.breaks.length) {
        return mediaManager.breaks[mediaManager.breaks.length - 1];
    } else {
        return mediaManager.breaks[shiftedIndex];
    }
}

export {
    BreakPointRatioMap,
    BreakpointNone,
    BreakpointXSmall,
    BreakpointSmall,
    BreakpointMedium,
    BreakpointLarge,
    BreakpointXL,
    BreakpointXXL
}
