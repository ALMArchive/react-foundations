import {BaseInputProps} from '../input-types';

export interface BaseInputHiddenProps {
    autoComplete?: string;
}

export type InputHiddenProps = BaseInputProps & BaseInputHiddenProps;
