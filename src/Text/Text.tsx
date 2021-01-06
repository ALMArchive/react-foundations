import React, {createElement} from 'react';
import {TextProps, TextTag} from './text-types';
import {shallowObjectCompare, useAnonymousStyle} from '../utilities';
import makeClassString from 'classnames';

interface RawTextProps {
    tag: TextTag,
    className?: string;
    text: string;
    props?: {[key: string]: any}
}

function _RawText({tag, className, text, ...props}: RawTextProps) {
    return createElement(tag, {className, ...props}, text);
}

const RawText = React.memo(_RawText);

function _Text({style = {}, classes = [], tag, text, ...props}: TextProps) {
    const id = useAnonymousStyle(style);
    const finalClassName = makeClassString(classes, id);
    return <RawText {...props} tag={tag} text={text} className={finalClassName}/>
}

export const Text = React.memo(_Text, shallowObjectCompare);
