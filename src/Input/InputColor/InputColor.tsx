import React from 'react';
import {Input} from '../Input';
import {InputType} from '../input-types';
import {Action} from '../../Action';
import {InputColorProps} from './input-color-types';

function _InputColor({onChange = () => {}, onInput = () => {}, ...props}: InputColorProps) {
    return <Action onChange={onChange} onInput={onInput}>
        <Input type={InputType.Color} {...props}/>
    </Action>;
}

export const InputColor = React.memo(_InputColor);
