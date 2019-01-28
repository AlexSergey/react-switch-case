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
                <Switch condition={componentShow} addClass={'someclassname'}>
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
            </div>
        )
    }
}

ReactDOM.render(
<Layout />,
    document.getElementById('root')
);