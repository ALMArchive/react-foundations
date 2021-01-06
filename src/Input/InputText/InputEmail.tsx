import React from 'react';
import {Action} from '../../Action';
import {Input} from '../Input';
import {InputType} from '../input-types';
import {InputEmailProps} from './input-text-types';

function _InputEmail({onChange = () => {}, onInput = () => {}, ...props}: InputEmailProps) {
    return <Action onChange={onChange} onInput={onInput}>
        <Input type={InputType.Email} {...props}/>
    </Action>;
}

export const InputEmail = React.memo(_InputEmail);
