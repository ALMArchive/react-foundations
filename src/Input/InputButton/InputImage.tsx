import React from 'react';
import {InputImageProps} from './input-button-types';
import {Input} from '../Input';
import {Action} from '../../Action';
import {InputType} from '../input-types';

function _InputImage({onClick = () => {}, ...props}: InputImageProps) {
    return <Action onClick={onClick}>
        <Input type={InputType.Image} {...props}/>
    </Action>;
}

export const InputImage = React.memo(_InputImage);
