import React from 'react';
import { connect } from 'react-redux';
import AddTodo from '../../components/add-todo/add-todo'
import TodoList from '../../components/todo-list/todo-list';
import { add, toggle } from '../../actions'
import './app.css';

function App({ list, onAdd, onToggle }) {
    return (
        <div className='app'>
            <AddTodo
                onAdd={onAdd} />
            <TodoList
                list={list}
                onToggle={onToggle} />
        </div>
    );
}

export default connect(state => ({
    list: state.todos,
}), {
    onAdd: add,
    onToggle: toggle,
})(App);