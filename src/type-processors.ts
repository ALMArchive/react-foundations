import {PositionProps} from './types';

export function processPositionProps(props: PositionProps): PositionProps {
    const out: PositionProps = {};
    if (props.top !== undefined) out.top = props.top;
    if (props.left !== undefined) out.left = props.left;
    if (props.right !== undefined) out.right = props.right;
    if (props.bottom !== undefined) out.bottom = props.bottom;
    return out;
}
