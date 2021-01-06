import React from 'react';
import {Text, TextTag} from '../Text';
import {shallowObjectCompare} from '../utilities';
import {HeaderProps} from './header-types';

function _Header({style = {}, classes = [], level, ...props}: HeaderProps) {
    return <Text tag={(level as unknown) as TextTag} style={style} classes={classes} {...props} />
}

export const Header = React.memo(_Header, shallowObjectCompare);
