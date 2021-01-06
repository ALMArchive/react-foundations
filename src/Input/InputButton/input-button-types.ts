import {EventHandler} from '../../types';
import {BaseInputProps} from '../input-types';

export interface BaseInputButtonProps {
    onClick?: EventHandler;
}

export type InputButtonProps = BaseInputProps & BaseInputButtonProps;

export interface BaseInputSubmitProps extends BaseInputButtonProps {
    formAction?: string;
    formEncType?: string;
    formMethod?: string;
    formNoValidate?: boolean;
    formTarget?: string;
}

export type InputSubmitProps = BaseInputProps & BaseInputSubmitProps;

export interface BaseInputImageProps extends BaseInputSubmitProps {
    src: string;
    alt?: string;
    height?: number | string;
    width?: number | string;
}

export type InputImageProps = BaseInputProps & BaseInputImageProps;
