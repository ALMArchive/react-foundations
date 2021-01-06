import {polyfill_createStyleSheet} from './polyfill_createStyleSheet';
import {CSSProperties} from 'react';

const addPx = require('add-px-to-style')
const hyphenate = require('hyphenate-style-name').default;

function createMarkup(obj: CSSProperties) {
    const obj2 = obj as { [key: string]: any };
    let result = ''
    for (const key of Object.keys(obj2)) {
        const val = obj2[key]
        result += hyphenate(key) + ':' + addPx(key, val) + ';'
    }
    return result
}

polyfill_createStyleSheet();

export class StyleManager {
    private static readonly _sheet: CSSStyleSheet = document.createStyleSheet();
    private readonly _sheet: CSSStyleSheet;
    _destroyed = false;
    _selectorsToRules = new Map<string, object>();

    constructor() {
        this._sheet = StyleManager._sheet;
    }

    destroy() {
        this.valid();
        this._destroyed = true;
        this._selectorsToRules.clear();
        this._sheet.ownerNode?.remove();
    }

    private findSelectorIndex(selector: string) {
        const rules = this._sheet.cssRules;
        selector = selector.replace(/^\*:/, ':');
        for (let i = 0; i < rules.length; i++) {
            const {selectorText} = rules[i];
            if (selectorText === selector) return i;
        }
        return -1;
    }

    private valid() {
        if (this._destroyed) throw Error('Using StyleManager after resource was released');
    }

    insertRule(selector: string, rules: CSSProperties) {
        this.valid();
        if (this._selectorsToRules.has(selector)) {
            console.log(selector);
            console.log(rules);
            const ind = this.findSelectorIndex(selector);
            console.log(this._sheet.cssRules[ind]);
            throw Error('Selector already added to style manager');
        }
        this._selectorsToRules.set(selector, rules);
        this._sheet.insertRule(`${selector} { ${createMarkup(rules)} }`);
    }

    replaceRule(selector: string, rules: CSSProperties) {
        this.valid();
        if(!this._selectorsToRules.has(selector)) this.insertRule(selector, rules);
        this._selectorsToRules.set(selector, rules);
        const index = this.findSelectorIndex(selector);
        this._sheet.removeRule(index);
        this._sheet.insertRule(`${selector} { ${createMarkup(rules)} }`);
    }

    appendRule(selector: string, rules: CSSProperties) {
        this.valid();
        if(!this._selectorsToRules.has(selector)) this.insertRule(selector, rules);
        const oldRules = this._selectorsToRules.get(selector);
        const newRules = Object.assign(oldRules, rules);
        this._selectorsToRules.set(selector, newRules);
        const index = this.findSelectorIndex(selector);
        this._sheet.removeRule(index);
        this._sheet.insertRule(`${selector} { ${createMarkup(rules)} }`);
    }

    removeRule(selector: string) {
        if (!this._selectorsToRules.has(selector)) return;
        const index = this.findSelectorIndex(selector);
        if(index === -1) console.log(this._sheet);
        this._sheet.removeRule(index);
        this._selectorsToRules.delete(selector);
    }
}
