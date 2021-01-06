import {CSSProperties, PropsWithChildren, SyntheticEvent} from 'react';

export interface BaseProps {
    style?: CSSProperties;
    classes?: Array<string>;
    disabled?: boolean;
}

export type ComponentProps = PropsWithChildren<BaseProps>;

export interface PresentationProps extends ComponentProps {
    background?: string;
}

export interface BasePositionProps {
    top?: number | string;
    left?: number | string;
    bottom?: number | string;
    right?: number | string;
}

export type PositionProps = BasePositionProps & ComponentProps

export type EventHandler = (e: SyntheticEvent) => void;
