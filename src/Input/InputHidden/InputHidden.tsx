import React from 'react';
import {Input} from '../Input';
import {InputHiddenProps} from './input-hidden-types';
import {InputType} from '../input-types';

function _InputHidden(props: InputHiddenProps) {
    return <Input type={InputType.Hidden} {...props}/>;
}

export const InputHidden = React.memo(_InputHidden);
