import React from 'react';
import Todo from '../todo/todo';
import './todo-list.css';

export default class TodoList extends React.PureComponent {
    render() {
        const { list } = this.props;

        return (
            <ul className='todo-list'>
                {list.map(item => (
                    <Todo 
                        key={item.id}
                        id={item.id}
                        checked={item.checked}
                        onToggle={this.handleToggle}>
                        {item.name}
                    </Todo>
                ))}                
            </ul>
        )
    }

    handleToggle = (id) => {
        const { onToggle } = this.props;

        onToggle(id);
    }
}