import {EventHandler} from '../../types';
import {BaseInputProps, RangeProps} from '../input-types';

export interface BaseInputDateTimeProps extends RangeProps {
    list?: string;
    autoComplete?: string;
    readonly?: boolean;
    onChange?: EventHandler;
    onInput?: EventHandler;
}

export type InputDateTimeProps = BaseInputProps & BaseInputDateTimeProps;
