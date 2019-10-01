import React from 'react';
import ReactDOM from 'react-dom';
import Switch, { Case, Default } from '../../src';

class Layout extends React.Component {
    componentWillMount() {
        setTimeout(() => {
            this.setState({componentShow: 'component2'});
        }, 1000);
        setTimeout(() => {
            this.setState({componentShow: 'component3'});
        }, 3000);
    }
    render() {
        let componentShow = (this.state && this.state.componentShow) ? this.state.componentShow : 'component1';
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
}

ReactDOM.render(
<Layout />,
    document.getElementById('root')
);
