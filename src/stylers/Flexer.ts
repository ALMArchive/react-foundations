export enum FlexDirection {
    Row = 'row',
    Column = 'column',
    RowReverse = 'row-reverse',
    ColumnReverse = 'column-reverse'
}

export enum FlexMainAxis {
    Start = 'start',
    End = 'end',
    Center = 'center',
    SpaceBetween = 'space-between',
    SpaceAround = 'space-around',
    SpaceEvenly = 'space-evenly'
}

export enum FlexSecondaryAxis {
    Start = 'start',
    End = 'end',
    Center = 'center',
    Stretch = 'stretch',
    Baseline = 'baseline'
}

export enum FlexWrap {
    NoWrap = 'nowrap',
    Wrap = 'wrap',
    WrapReverse = 'wrap-reverse'
}

export interface FlexerProps {
    direction?: FlexDirection;
    main?: FlexMainAxis;
    secondary?: FlexSecondaryAxis;
    wrap?: FlexWrap;
    grow?: number;
}

function processFlexerProps(props: FlexerProps): {[key: string]: any} {
    const out: {[key: string]: any} = {display: 'flex'};
    if (props.direction) out['flexDirection'] = props.direction;
    if (props.main) out['justifyContent'] = props.main;
    if (props.secondary) out['alignItems'] = props.secondary;
    if (props.wrap) out['flexWrap'] = props.wrap;
    if (props.grow) out['flexGrow'] = props.grow;
    return out;
}

export function Flexer(props: FlexerProps = {}) {
    return processFlexerProps(props);
}

interface FlexerPresetsProps {
    readonly MainCenter: CSSProperties;
    readonly ColumnCenter: CSSProperties;
    readonly Center: CSSProperties;
    readonly Column: CSSProperties;
    readonly Flex: CSSProperties;
}

export const FlexerPresets: FlexerPresetsProps = {
    MainCenter: Flexer({main: FlexMainAxis.Center}),
    ColumnCenter: Flexer({direction: FlexDirection.Column, secondary: FlexSecondaryAxis.Center}),
    Center: Flexer({direction: FlexDirection.Column, main: FlexMainAxis.Center, secondary: FlexSecondaryAxis.Center}),
    Column: Flexer({direction: FlexDirection.Column}),
    Flex: Flexer({})
};
