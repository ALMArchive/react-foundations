import React, {useEffect, useState} from 'react';
import {Gradient} from './Gradient';
import {RotatingGradientProps} from './gradient-types';

export function RotatingGradient({stepSize = 1, ...props}: RotatingGradientProps) {
    const [rotation, setRotation] = useState<number>(0);

    useEffect(() => {
        const gen = (() => {
            let count = 0;
            return (fact = 1) => count++ * fact;
        })();

        let run = true;
        function step() {
            setRotation(gen(stepSize));
            if (run) window.requestAnimationFrame(step);
        }

        window.requestAnimationFrame(step);
        return () => {run = false};
    }, [stepSize]);

    return <Gradient {...props} rotation={rotation}/>;
}
