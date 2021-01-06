import React from 'react';
import {Action} from '../../Action';
import {Input} from '../Input';
import {InputRangeProps} from './input-number-types';
import {InputType} from '../input-types';

function _InputRange({onChange = () => {}, onInput = () => {}, ...props}: InputRangeProps) {
    return <Action onChange={onChange} onInput={onInput}>
     <Input type={InputType.Range} {...props}/>
    </Action>;
}

export const InputRange = React.memo(_InputRange);
