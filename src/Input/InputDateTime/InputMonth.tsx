import React from 'react';
import {Input} from '../Input';
import {InputType} from '../input-types';
import {Action} from '../../Action';
import {InputDateTimeProps} from './index';

function _InputMonth({onChange = () => {}, onInput = () => {}, ...props}: InputDateTimeProps) {
    return <Action onChange={onChange} onInput={onInput}>
        <Input type={InputType.Month} {...props}/>
    </Action>;
}

export const InputMonth = React.memo(_InputMonth);
