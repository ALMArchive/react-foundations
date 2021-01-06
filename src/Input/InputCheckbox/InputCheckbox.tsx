import React from 'react';
import {InputCheckboxProps} from './input-checkbox-types';
import {Input} from '../Input';
import {InputType} from '../input-types';
import {Action} from '../../Action';

function _InputCheckbox({onChange = () => {}, onInput = () => {}, ...props}: InputCheckboxProps) {
    return <Action onChange={onChange} onInput={onInput}>
        <Input type={InputType.Checkbox} {...props}/>
    </Action>;
}

export const InputCheckbox = React.memo(_InputCheckbox);
