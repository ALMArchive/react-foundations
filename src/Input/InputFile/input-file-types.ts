import {BaseInputProps} from '../input-types';
import {EventHandler} from '../../types';

export interface BaseInputFileProps {
    required?: boolean;
    accept?: string;
    capture?: string;
    files?: FileList;
    multiple?: boolean;
    onChange?: EventHandler;
    onInput?: EventHandler;
}

export type InputFileProps = BaseInputProps & BaseInputFileProps;
