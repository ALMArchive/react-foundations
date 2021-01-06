import {BaseProps} from '../types';

export enum TextTag {
    Paragraph = 'p',
    Span = 'span',
    Anchor = 'a',
    Heading1 = 'h1',
    Heading2 = 'h2',
    Heading3 = 'h3',
    Heading4 = 'h4',
    Heading5 = 'h5',
    Heading6 = 'h6',
    Strong = 'strong',
    Emphasized = 'em',
    Bold = 'b',
    Italic = 'i',
    BlockQuote = 'blockquote',
    InlineQuote = 'q',
    Code = 'code',
    Preformatted = 'pre',
    Mark = 'mark',
    Insert = 'ins',
    Delete = 'del',
    Subscript = 'sub',
    Superscript = 'sup',
    Small = 'small'
}

export interface FontProps {
    text: string;
}

export type BaseTextProps = FontProps & BaseProps;

export interface TextProps extends BaseTextProps {
    tag: TextTag;
}
