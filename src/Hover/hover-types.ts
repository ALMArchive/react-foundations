import {ComponentProps} from '../types';
import {CSSProperties} from 'react';

export interface HoverProps extends ComponentProps {
    hoverStyles?: CSSProperties;
    subStyles?: { [key: string]: CSSProperties };
}
