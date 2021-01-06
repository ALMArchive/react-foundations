import {BaseProps} from '../types';
import {BaseInputButtonProps, BaseInputSubmitProps} from './InputButton';
import {BaseInputCheckboxProps} from './InputCheckbox';
import {BaseInputColorProps} from './InputColor';
import {BaseInputDateTimeProps} from './InputDateTime';
import {BaseInputPasswordProps, BaseInputTextProps, BaseInputEmailProps} from './InputText';
import {BaseInputNumberProps, BaseInputRangeProps} from './InputNumber';
import {BaseInputHiddenProps} from './InputHidden';
import {BaseInputFileProps} from './InputFile';

export enum InputType {
    Button = 'button',
    Checkbox = 'checkbox',
    Color = 'color',
    Date = 'date',
    DateTimeLocal = 'datetime-local',
    Email = 'email',
    File = 'file',
    Hidden = 'hidden',
    Image = 'image',
    Month = 'month',
    Number = 'number',
    Password = 'password',
    Radio = 'radio',
    Range = 'range',
    Search = 'search',
    Submit = 'submit',
    Tel = 'tel',
    Text = 'text',
    Time = 'time',
    Url = 'url',
    Week = 'week'
}

export interface RangeProps {
    step?: number | string;
    min?: string;
    max?: string;
}

export interface BaseInputProps extends BaseProps {
    value?: string;
    name?: string;
}

export type BaseRawInputProps =
    Partial<{ type: InputType }>
    & Partial<BaseInputButtonProps>
    & Partial<BaseInputSubmitProps>
    & Partial<BaseInputCheckboxProps>
    & Partial<BaseInputColorProps>
    & Partial<BaseInputDateTimeProps>
    & Partial<BaseInputTextProps>
    & Partial<BaseInputPasswordProps>
    & Partial<BaseInputEmailProps>
    & Partial<BaseInputRangeProps>
    & Partial<BaseInputNumberProps>
    & Partial<BaseInputHiddenProps>
    & Partial<BaseInputFileProps>;

export type InputProps = BaseInputProps & BaseRawInputProps;
