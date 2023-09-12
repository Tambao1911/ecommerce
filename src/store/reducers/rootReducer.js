const init = {
    users: [
        {
            id: 1,
            name: 'Tâm Bảo',
        },
        {
            id: 2,
            name: 'Tâm Phạm',
        },
    ]
}

const rootReducers = (state = init, action) => {

    switch (action.type) {
        case 'DELETE':
            let users = [...state.users];
            users = users.filter(item => item.id !== action.payload.id)
            return {
                users: users
            }
        case 'ADD':
            let id = Math.floor(Math.random() * 100)
            let user = { id: id, name: `random - ${id}` }
            return {
                ...state,
                users: [...state.users, user]
            }
        default:

    }
    return state
}

export default rootReducers