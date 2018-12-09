let id = 9;

export interface TodoModel {
    id: number;
    name: string;
    checked: boolean;
}

export interface AddAction {
    type: 'ADD',
    payload: {
        todo: TodoModel;
    };
}

export interface ToggleAction {
    type: 'TOGGLE',
    payload: {
        id: number;
    };
}

export function add(name: string): AddAction {
    return {
        type: 'ADD',
        payload: {
            todo: {
                id: id++,
                name,
                checked: false,
            }
        },
    };
}

export function toggle(id: number): ToggleAction {
    return {
        type: 'TOGGLE',
        payload: {
            id,
        },
    };
}