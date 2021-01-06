import React, {PropsWithChildren} from 'react';
import {PropsClonerProps} from './props-cloner-types';

type AnyObject = {[key: string]: any};
function combineObjects(obj1: AnyObject = {}, obj2: AnyObject = {}): AnyObject {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    const out: AnyObject = Object.assign({}, obj1, obj2);
    for(const key of keys1) {
        if(keys2.includes(key)) {
            if(Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
                out[key] = Array.from(new Set(obj1[key].concat(obj2[key])));
            } else if(typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
                out[key] = {...obj1[key], ...obj2[key]};
            }
        }
    }
    return out;
}

export function PropsCloner({children, props}: PropsWithChildren<PropsClonerProps>) {
    return <>
        {React.Children.map(children, child => {
            if (!React.isValidElement(child)) return <></>;
            const newProps = combineObjects(props, child.props);
            return React.cloneElement(child, newProps);
        })}
    </>;
}
