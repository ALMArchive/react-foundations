import React from 'react';
import {Action} from '../../Action';
import {Input} from '../Input';
import {InputType} from '../input-types';
import {InputTextProps} from './input-text-types';

function _InputSearch({onChange = () => {}, onInput = () => {}, ...props}: InputTextProps) {
    return <Action onChange={onChange} onInput={onInput}>
        <Input type={InputType.Search} {...props}/>
    </Action>;
}

export const InputSearch = React.memo(_InputSearch);
