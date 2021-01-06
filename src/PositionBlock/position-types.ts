import {PositionProps} from '../types';

export enum PositionTypes {
    Absolute = 'absolute',
    Fixed = 'fixed',
    Initial = 'initial',
    Relative = 'relative',
    Static = 'static',
    Sticky = 'sticky'
}

export interface PositionBlockProps extends PositionProps {
    position: PositionTypes;
}
