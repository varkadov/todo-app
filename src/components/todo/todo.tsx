import React from 'react';
import './todo.css';

interface Props<T = number> {
    id: T
    checked: boolean;
    onToggle: (id: T) => void;
}

export default class Todo extends React.PureComponent<Props> {
    render() {
        const { checked, children } = this.props;

        return (
            <li
                className={'todo' + (checked ? ' todo_checked' : '')}
                onClick={this.handleClick}>
                {children}
            </li>
        );
    }

    private handleClick = () => {
        const { id, onToggle } = this.props;

        onToggle(id);
    }
}