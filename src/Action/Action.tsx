import React from 'react';
import {PropsCloner} from '../PropsCloner';
import {ActionProps} from './action-types';

export function Action({children, ...props}: ActionProps) {
    return PropsCloner({children, props});
}
