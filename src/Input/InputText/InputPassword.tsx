import React from 'react';
import {Action} from '../../Action';
import {Input} from '../Input';
import {InputType} from '../input-types';
import {InputPasswordProps, InputTextProps} from './input-text-types';

function _InputPassword({onChange = () => {}, onInput = () => {}, ...props}: InputPasswordProps) {
    return <Action onChange={onChange} onInput={onInput}>
        <Input type={InputType.Password} {...props}/>
    </Action>;
}

export const InputPassword = React.memo(_InputPassword);
