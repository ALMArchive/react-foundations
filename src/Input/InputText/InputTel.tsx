import React from 'react';
import {Action} from '../../Action';
import {Input} from '../Input';
import {InputType} from '../input-types';
import {InputTextProps} from './input-text-types';

function _InputTel({onChange = () => {}, onInput = () => {}, ...props}: InputTextProps) {
    return <Action onChange={onChange} onInput={onInput}>
        <Input type={InputType.Tel} {...props}/>
    </Action>;
}

export const InputTel = React.memo(_InputTel);
