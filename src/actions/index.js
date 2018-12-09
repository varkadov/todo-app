let id = 9;

export function add(name) {
    return {
        type: 'ADD',
        payload: {
            todo: {
                id: id++,
                name,
                chacked: false,
            }
        },
    };
}

export function toggle(id) {
    return {
        type: 'TOGGLE',
        payload: {
            id,
        },
    };
}