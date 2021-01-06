import React from 'react';
import {DeflasherProps} from './deflasher-types';
import {useAnonymousStyle} from '../utilities';

export function Deflasher({children}: DeflasherProps) {
    const id = useAnonymousStyle({visibility: 'initial !important'} as any)
    return <div style={{visibility: 'hidden'}} className={id}>
        {children}
    </div>;
}
