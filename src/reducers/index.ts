import { AddAction, ToggleAction, TodoModel} from '../actions';

interface State {
    todos: TodoModel[];
}

const initState: State = {
    todos: [{
        id: 1,
        name: `Tell about init TypeScript project`,
        checked: false,
    }, {
        id: 2,
        name: `Rewrite actions in TypeScript`,
        checked: false,
    }, {
        id: 3,
        name: `Rewrite reducers in TypeScript`,
        checked: false,
    }, {
        id: 4,
        name: `Rewrite <Todo /> in TypeScript`,
        checked: false,
    }, {
        id: 5,
        name: `Rewrite <AddTodo /> in TypeScript`,
        checked: false,
    }, {
        id: 6,
        name: `Move <Button /> and <Input /> into UI lib`,
        checked: false,
    }, {
        id: 7,
        name: `Rename design prop of <Button />`,
        checked: false,
    }, {
        id: 8,
        name: `Change <Input /> onChange event's shape`,
        checked: false,
    }],
}

export default function(state: State = initState, action: AddAction | ToggleAction): State {
    switch (action.type) {
        case 'ADD': {
            const { todo } = action.payload;
            return {
                todos: [
                    ...state.todos,
                    {...todo}
                ]
            }
        }
        case 'TOGGLE': {
            const { id } = action.payload;

            return {
                todos: state.todos.map(todo => {
                    if (todo.id !== id) {
                        return todo;
                    }

                    return {
                        ...todo,
                        checked: !todo.checked
                    }
                })
            }
        }
        default: {
            return state;
        }
    }
}