import React from 'react';
import {Action} from '../../Action';
import {Input} from '../Input';
import {InputType} from '../input-types';
import {InputTextProps} from './input-text-types';

function _InputText({onChange = () => {}, onInput = () => {}, ...props}: InputTextProps) {
    return <Action onChange={onChange} onInput={onInput}>
        <Input type={InputType.Text} {...props}/>
    </Action>;
}

export const InputText = React.memo(_InputText);
