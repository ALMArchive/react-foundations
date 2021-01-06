import {FontProps} from '../Text/text-types';
import {BaseProps} from '../types';
import {TextTag} from '../Text';

export enum HeaderTag {
    Heading1 = TextTag.Heading1,
    Heading2 = TextTag.Heading2,
    Heading3 = TextTag.Heading3,
    Heading4 = TextTag.Heading4,
    Heading5 = TextTag.Heading5,
    Heading6 = TextTag.Heading6
}

export type BaseHeaderProps = FontProps & BaseProps;

export interface HeaderProps extends BaseHeaderProps {
    level: HeaderTag;
}
