import {BaseInputProps, RangeProps} from '../input-types';
import {EventHandler} from '../../types';

export interface BaseInputRangeProps extends RangeProps {
    autoComplete?: string;
    list?: string;
    onChange?: EventHandler;
    onInput?: EventHandler;
}

export type InputRangeProps = BaseInputProps & BaseInputRangeProps;

export interface BaseInputNumberProps extends BaseInputRangeProps {
    readonly?: boolean;
    placeholder?: string;
}

export type InputNumberProps = BaseInputProps & BaseInputNumberProps;
