import React from 'react';
import {Input} from '../Input';
import {InputType} from '../input-types';
import {Action} from '../../Action';
import {InputDateTimeProps} from './index';

function _InputTime({onChange = () => {}, onInput = () => {}, ...props}: InputDateTimeProps) {
    return <Action onChange={onChange} onInput={onInput}>
        <Input type={InputType.Time} {...props}/>
    </Action>;
}

export const InputTime = React.memo(_InputTime);
