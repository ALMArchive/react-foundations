import React from 'react';
import {Action} from '../../Action';
import {Input} from '../Input';
import {InputType} from '../input-types';
import {InputTextProps} from './input-text-types';

function _InputUrl({onChange = () => {}, onInput = () => {}, ...props}: InputTextProps) {
    return <Action onChange={onChange} onInput={onInput}>
        <Input type={InputType.Url} {...props}/>
    </Action>;
}

export const InputUrl = React.memo(_InputUrl);
