import {PropsCloner} from '../PropsCloner';
import {HoverProps} from './hover-types';
import {useAnonymousStyle, useStyles} from '../utilities';

export function Hover({children, style = {}, classes = [], hoverStyles = {}, subStyles = {}}: HoverProps) {
    const id = useAnonymousStyle(hoverStyles, ':hover');
    useStyles(subStyles, `.${id}:hover`);
    return PropsCloner({children, props: {style, classes: [...classes, id]}});
}
