import React, {createElement} from 'react';
import makeClassString from 'classnames';
import {shallowObjectCompare} from '../utilities/utilities';
import {ImageProps, RawImageProps} from './image-types';
import {useAnonymousStyle} from '../utilities/hooks';

function _RawImage({src = '', alt = '', className = ''}: RawImageProps) {
    return createElement('img', {className, src, alt});
}

const RawImage = React.memo(_RawImage);

function _Image({style = {}, classes = [], src, alt, ...props}: ImageProps) {
    const id = useAnonymousStyle({...props, ...style});
    const className = makeClassString(classes, id);
    return <RawImage src={src} alt={alt} className={className}/>;
}

export const Image = React.memo(_Image, shallowObjectCompare);
