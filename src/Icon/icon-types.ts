import {BaseProps, ComponentProps} from '../types';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {CSSProperties} from 'react';

export interface RawIconProps extends BaseProps {
    icon: IconDefinition;
    style?: CSSProperties;
    className?: string;
}

export interface IconProps extends ComponentProps {
    icon: IconDefinition;
    fill?: string;
    size?: number | string;
}
