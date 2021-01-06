import React, {CSSProperties, useRef} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {ensureNotPx, shallowObjectCompare} from '../utilities';
import makeClassString from 'classnames';
import idManager from '../utilities/id_manager';
import {IconProps, RawIconProps} from './icon-types';
import {useStyle} from '../utilities';

function _RawIcon({className, style = {}, icon}: RawIconProps) {
    return <FontAwesomeIcon className={className} style={style} icon={icon}/>;
}

declare global {
    interface CSSProperties {
        fill?: string;
    }
}

const RawIcon = React.memo(_RawIcon, shallowObjectCompare);

function _Icon({style = {}, classes = [], icon, fill, size}: IconProps) {
    const {current: id} = useRef<string>(idManager.next());
    const pathStyles: CSSProperties = {};
    const otherStyles: CSSProperties = {...style};
    if (fill) Object.assign(pathStyles, {fill});
    if (size) {
        const finalSize = ensureNotPx(size) + ' !important;';
        otherStyles.width = finalSize;
        otherStyles.height = finalSize;
    }
    useStyle(`.${id} path`, pathStyles);
    useStyle(`.${id}`, otherStyles);
    const className = makeClassString(classes, id);
    return <RawIcon icon={icon} className={className} style={style}/>;
}

export const Icon = React.memo(_Icon, shallowObjectCompare);
