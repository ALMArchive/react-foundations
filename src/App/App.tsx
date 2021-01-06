import React, {PropsWithChildren} from 'react';
import {Deflasher} from '../Deflasher';
import {useStyle} from "../utilities";
import config from '../config';

export function App({children}: PropsWithChildren<{}>) {
    useStyle('html', {fontSize: `${config.BaseFontSize / 16 * 100}%`});
    return <Deflasher>
        {children}
    </Deflasher>;
}
