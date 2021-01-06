export interface Coordinates2D {
    x: number | string;
    y: number | string;
}

export interface TransformerProps {
    translate?: Coordinates2D;
    scale?: Coordinates2D;
    skew?: Coordinates2D;
    rotate?: string;
    transformOrigin?: string;
    inlineBlock?: boolean;
}

function coordToString(coord: Coordinates2D): string {
    const {x, y} = coord;
    return `(${x}, ${y})`;
}

function makeTransformString(props: TransformerProps) {
    const subStyles = [];
    if (props.translate) subStyles.push('translate' + coordToString(props.translate));
    if (props.scale) subStyles.push('scale' + coordToString(props.scale));
    if (props.skew) subStyles.push('skew' + coordToString(props.skew));
    if (props.rotate) subStyles.push('rotate(' + props.rotate + ')');
    return subStyles.length === 0 ? '' : subStyles.join(' ');
}

export function Transformer(props: TransformerProps = {}) {
    const {transformOrigin, ...transformProps} = props;
    const transform = makeTransformString(transformProps);
    return {transform, transformOrigin};
}
