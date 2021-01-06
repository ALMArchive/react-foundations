import React from 'react';
import {InputSubmitProps} from './input-button-types';
import {Input} from '../Input';
import {Action} from '../../Action';
import {InputType} from '../input-types';

function _InputSubmit({onClick = () => {}, ...props}: InputSubmitProps) {
    return <Action onClick={onClick}>
        <Input type={InputType.Submit} {...props}/>
    </Action>;
}

export const InputSubmit = React.memo(_InputSubmit);
