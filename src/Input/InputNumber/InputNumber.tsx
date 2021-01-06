import React from 'react';
import {Action} from '../../Action';
import {Input} from '../Input';
import {InputNumberProps} from './input-number-types';
import {InputType} from '../input-types';

function _InputNumber({onChange = () => {}, onInput = () => {}, ...props}: InputNumberProps) {
    return <Action onChange={onChange} onInput={onInput}>
     <Input type={InputType.Number} {...props}/>
    </Action>;
}

export const InputNumber = React.memo(_InputNumber);
