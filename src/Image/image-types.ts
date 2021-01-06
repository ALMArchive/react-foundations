import {SurfaceProps} from '../Surface/surface-types';

export interface BaseImageProps {
    src: string;
    alt: string;
}

export interface RawImageProps extends BaseImageProps {
    className?: string;
}

export type ImageProps = SurfaceProps & BaseImageProps;
