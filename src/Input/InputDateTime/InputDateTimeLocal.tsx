import React from 'react';
import {Input} from '../Input';
import {InputType} from '../input-types';
import {Action} from '../../Action';
import {InputDateTimeProps} from './index';

function _InputDateTimeLocal({onChange = () => {}, onInput = () => {}, ...props}: InputDateTimeProps) {
    return <Action onChange={onChange} onInput={onInput}>
        <Input type={InputType.DateTimeLocal} {...props}/>
    </Action>;
}

export const InputDateTimeLocal = React.memo(_InputDateTimeLocal);
