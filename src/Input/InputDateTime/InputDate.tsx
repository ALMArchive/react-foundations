import React from 'react';
import {Input} from '../Input';
import {InputType} from '../input-types';
import {Action} from '../../Action';
import {InputDateTimeProps} from './input-date-time-types';

function _InputDate({onChange = () => {}, onInput = () => {}, ...props}: InputDateTimeProps) {
    return <Action onChange={onChange} onInput={onInput}>
        <Input type={InputType.Date} {...props}/>
    </Action>;
}

export const InputDate = React.memo(_InputDate);
