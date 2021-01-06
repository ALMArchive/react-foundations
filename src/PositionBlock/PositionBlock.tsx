import React from 'react';
import {Surface} from '../Surface';
import {PositionBlockProps} from './position-types';

export function PositionBlock({children, style = {}, classes = [], position, ...props}: PositionBlockProps) {
    return <Surface style={{...props, ...style, position}}
                    classes={classes}>
        {children}
    </Surface>;
}
