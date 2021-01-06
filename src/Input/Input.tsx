import React from 'react';
import {BaseRawInputProps, InputProps} from './input-types';
import {shallowObjectCompare, useAnonymousStyle} from '../utilities';
import makeClassString from 'classnames';

type RawInputProps = BaseRawInputProps & { className?: string }

function _RawInput({type, className, ...rest}: RawInputProps) {
    return <input className={className} type={type} {...rest}/>
}

const RawInput = React.memo(_RawInput, shallowObjectCompare);

function _Input({style = {}, classes = [], type, ...props}: InputProps) {
    const id = useAnonymousStyle(style);
    const finalClassName = makeClassString(classes, id);
    return <RawInput type={type} className={finalClassName} {...props}/>
}

export const Input = React.memo(_Input, shallowObjectCompare);
