import React, {useEffect} from 'react';
import {PositionBlock, PositionTypes} from "../PositionBlock";
import {targetOnly} from "../utilities";
import {FlexerPresets} from "../stylers";
import {ComponentProps} from "../types";
import {Action, ActionProps} from "../Action";
import {Surface} from "../Surface";

type ModalBaseProps = ComponentProps & ActionProps;

export interface ModalProps extends ModalBaseProps {
    open: boolean;
}

export function Modal({children, style = {}, classes = [], open, ...props}: ModalProps) {
    const {onClickCapture = () => ({})} = props;
    useEffect(() => {
        const body = document.getElementsByTagName('body')[0];
        if (open) body.style.overflow = 'hidden';
        return () => {
            body.style.overflow = 'initial'
        };
    });
    const visibility = open ? 'initial' : 'hidden';
    const display = open ? 'initial' : 'none';
    return open ? <PositionBlock style={{width: '100%', zIndex: 9999, visibility, display}} top={0} left={0}
                          position={PositionTypes.Fixed}>
        <Action onClickCapture={targetOnly(onClickCapture)}>
            <Surface classes={classes}
                     style={{
                         width: '100%',
                         height: '100vh',
                         ...style,
                         ...FlexerPresets.Center
                     }}>
                {children}
            </Surface>
        </Action>
    </PositionBlock> : <></>;
}
