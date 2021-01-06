import React from 'react';
import makeClassString from 'classnames';
import {SurfaceProps} from './surface-types';
import {useAnonymousStyle} from '../utilities';

export function Surface({children, style = {}, classes = [], ...props}: SurfaceProps) {
    const id = useAnonymousStyle(style);
    const className = makeClassString(classes, id);
    return <div {...props} className={className}>
        {children}
    </div>;
}
