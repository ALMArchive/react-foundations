import {ensureNotPxEm} from './utilities-conversions';

export type BreakpointDims = Map<number, string>;

export const BreakpointNone = -1;
export class MediaQueryManager extends EventTarget {
    private _watchers: Array<MediaQueryList> = [];
    private _symbols: Array<number> = [];
    private _active: number = BreakpointNone;


    constructor(breaks: Array<number>) {
        super();
        const handler = () => {
            for(let i = 0; i < this._watchers.length; i++) {
                if(this._watchers[i].matches) {
                    this._active = this._symbols[i];
                    break;
                }
            }
            this._changed();
        }
        const finalBreaks = [...breaks, 99999];
        for(let i = 0; i < finalBreaks.length; i++) {
            const pt = finalBreaks[i];
            const dim = ensureNotPxEm(pt);
            const query = `(max-width: ${dim})`;
            const watcher = window.matchMedia(query);
            watcher.addEventListener('change', handler);
            this._watchers.push(watcher);
            this._symbols.push(pt);
        }
        handler();
    }

    private _changed() {
        this.dispatchEvent(new Event('change'));
    }

    get breaks() {
        return this._symbols
    }

    get active() {
        return this._active;
    }
}
