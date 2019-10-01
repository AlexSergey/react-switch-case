import { Component, Children } from 'react';
/**
 * Switch component for React
 *
 * Switch parameters:
 * condition {String} is condition for choice children component
 *
 * Case parameters:
 * value {String} is anchor for Switch
 * */
class Switch extends Component {
    getChildren() {
        let cases    = [],
            defaults = [];

        Children.forEach(this.props.children, (item) => {
            switch (item.type.componentName) {
            case 'case':
                if (typeof this.props.condition === 'function') {
                    if (this.props.condition(item.props.value)) {
                        cases.push(item);
                    }
                }
                else if (this.props.condition === item.props.value) {
                    cases.push(item);
                }
                break;
            case 'default':
                defaults.push(item);
                break;
            }
        });

        if (cases.length > 0) {
            return cases;
        }
        return defaults;
    }

    render() {
        const children = this.getChildren();

        return children.length === 0 ? null : children;
    }
}

class Case extends Component {
    static componentName = 'case';

    render() {
        return this.props.children;
    }
}

class Default extends Component {
    static componentName = 'default';

    render() {
        return this.props.children;
    }
}

export default Switch;
export { Case };
export { Default };
