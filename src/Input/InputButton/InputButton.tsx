import React from 'react';
import {InputButtonProps} from './input-button-types';
import {Input} from '../Input';
import {Action} from '../../Action';
import {InputType} from '../input-types';

function _InputButton({onClick = () => {}, ...props}: InputButtonProps) {
    return <Action onClick={onClick}>
        <Input type={InputType.Button} {...props}/>
    </Action>;
}

export const InputButton = React.memo(_InputButton);
