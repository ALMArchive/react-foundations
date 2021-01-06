import {SurfaceProps} from '../Surface/surface-types';

export interface ColorProbability {
    color: string;
    probability: number;
}

export interface GradientBaseProps extends SurfaceProps {
    colors: ColorProbability[];
}

export interface GradientProps extends GradientBaseProps {
    rotation?: number;
}

export interface RotatingGradientProps extends GradientBaseProps {
    stepSize?: number;
}
