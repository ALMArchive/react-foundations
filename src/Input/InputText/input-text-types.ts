import {BaseInputProps} from '../input-types';
import {EventHandler} from '../../types';

export interface BaseInputTextProps {
    autocomplete?: string;
    list?: string;
    maxlength?: number;
    minlength?: number;
    onChange?: EventHandler;
    onInput?: EventHandler;
    pattern?: string;
    placeholder?: string;
    readonly?: boolean;
    required?: boolean;
    size?: number;
    spellcheck?: boolean | string;
}

export enum InputPasswordType {
    Text = 'text',
    Tel = 'tel',
    None = 'none',
    Url = 'url',
    Email = 'email',
    Numeric = 'numeric',
    Decimal = 'decimal',
    Search = 'search'
}

export type InputTextProps = BaseInputProps & BaseInputTextProps;

export interface BaseInputPasswordProps extends BaseInputTextProps {
    inputMode?: InputPasswordType;
}

export type InputPasswordProps = BaseInputProps & BaseInputPasswordProps;

export interface BaseInputEmailProps extends BaseInputTextProps {
    multiple?: boolean;
}

export type InputEmailProps = BaseInputProps & BaseInputPasswordProps;
