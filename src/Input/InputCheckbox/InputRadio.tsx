import React from 'react';
import {InputCheckboxProps} from './input-checkbox-types';
import {Input} from '../Input';
import {InputType} from '../input-types';
import {Action} from '../../Action';

function _InputRadio({onChange = () => {}, onInput = () => {}, ...props}: InputCheckboxProps) {
    return <Action onChange={onChange} onInput={onInput}>
        <Input type={InputType.Radio} {...props}/>
    </Action>;
}

export const InputRadio = React.memo(_InputRadio);
