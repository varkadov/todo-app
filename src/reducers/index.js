const initState = {
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

export default function(state = initState, action) {
    switch (action.type) {
        case 'ADD': {
            return state;
        }
        case 'TOGGLE': {
            return state;   
        }
        default: {
            return state;
        }
    }
}