import React from 'react';
import './todo.css';

export default class Todo extends React.PureComponent {
    render() {
        const { children, checked } = this.props;

        return (
            <li
                className={'todo' + (checked ? ' todo_checked' : '')}
                onClick={this.handleClick}>
                {children}
            </li>
        );
    }

    handleClick = () => {
        const { id, onToggle } = this.props;

        onToggle(id);
    }
}