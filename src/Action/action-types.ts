import {ComponentProps, EventHandler} from '../types';

export interface ActionProps extends ComponentProps {
    onKeyDown?: EventHandler;
    onKeyPress?: EventHandler;
    onKeyUp?: EventHandler;
    onClick?: EventHandler;
    onClickCapture?: EventHandler;
    onChange?: EventHandler;
    onInput?: EventHandler;
    tabIndex?: number;
}
