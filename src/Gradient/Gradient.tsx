import React, {useEffect, useState} from 'react';
import {RotatingGradientController} from './RotatingGradientController';
import {Surface} from '../Surface';
import {GradientProps} from './gradient-types';

// TODO: Look at props, not using children/classes/style
export function Gradient({rotation = 0, colors, ...props}: GradientProps) {
    const [controller, setController] = useState<RotatingGradientController>(new RotatingGradientController(colors));

    useEffect(() => {
        setController(new RotatingGradientController(colors));
    }, [colors])

    const background = controller.grad(rotation, 0);
    return <Surface {...props} style={{background}}/>
}
