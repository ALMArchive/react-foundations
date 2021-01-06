import {EventHandler} from '../../types';
import {BaseInputProps} from '../input-types';

export interface BaseInputColorProps {
    list?: string;
    autoComplete?: string;
    onChange?: EventHandler;
    onInput?: EventHandler;
}

export type InputColorProps = BaseInputProps & BaseInputColorProps;
