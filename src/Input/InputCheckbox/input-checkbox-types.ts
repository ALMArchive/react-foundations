import {EventHandler} from '../../types';
import {BaseInputProps} from '../input-types';

export interface BaseInputCheckboxProps {
    checked?: boolean;
    required?: boolean;
    onChange?: EventHandler;
    onInput?: EventHandler;
}

export type InputCheckboxProps = BaseInputProps & BaseInputCheckboxProps;
