import React from 'react';
import {Input} from '../Input';
import {InputType} from '../input-types';
import {Action} from '../../Action';
import {InputDateTimeProps} from './index';

function _InputWeek({onChange = () => {}, onInput = () => {}, ...props}: InputDateTimeProps) {
    return <Action onChange={onChange} onInput={onInput}>
        <Input type={InputType.Week} {...props}/>
    </Action>;
}

export const InputWeek = React.memo(_InputWeek);
