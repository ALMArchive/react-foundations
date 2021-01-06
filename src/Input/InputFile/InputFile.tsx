import React from 'react';
import {Action} from '../../Action';
import {Input} from '../Input';
import {InputType} from '../input-types';
import {InputFileProps} from './input-file-types';

function _InputFile({onChange = () => {}, onInput = () => {}, ...props}: InputFileProps) {
    return <Action onChange={onChange} onInput={onInput}>
        <Input type={InputType.File} {...props}/>
    </Action>;
}

export const InputFile = React.memo(_InputFile);
