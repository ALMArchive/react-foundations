import React from 'react';
import {Text, TextTag} from '../Text';
import {shallowObjectCompare} from '../utilities';
import {ParagraphProps} from './paragraph-types';

export function _Paragraph({style = {}, classes = [], ...props}: ParagraphProps) {
    return <Text tag={TextTag.Paragraph} style={style} classes={classes} {...props} />;
}

export const Paragraph = React.memo(_Paragraph, shallowObjectCompare);
