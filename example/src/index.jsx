import {StrictMode, useEffect, useState} from 'react';
import {createRoot} from 'react-dom/client';

import Switch, { Case, Default } from '../../src';

const Layout = () => {
    const [componentShow, setComponentShow] = useState('component1');
    useEffect(() => {
        setTimeout(() => {
            setComponentShow('component2');
        }, 1000);
        setTimeout(() => {
            setComponentShow('component3');
        }, 3000);
    }, []);

    return (
        <div>
            <Switch condition={componentShow}>
                <Case value="component1">
                    <span>Component 1</span>
                </Case>
                <Case value="component2">
                    <span>Component 2</span>
                </Case>
                <Default>
                    <span>Nothing!</span>
                </Default>
            </Switch>
            <h2>Condition as function</h2>
            <Switch condition={(value) => ['moderator', 'admin'].indexOf(value) >= 0}>
                <Case value="user">
                    <div>I am user</div>
                </Case>
                <Case value="admin">
                    <div>I am admin</div>
                </Case>
                <Case value="moderator">
                    <div>I am moderator</div>
                </Case>
                <Default>
                    <div>I am not authorized!</div>
                </Default>
            </Switch>
        </div>
    )
}


const container = document.getElementById('root');

const root = createRoot(container);

root.render(
    <StrictMode>
        <Layout />
    </StrictMode>
);
