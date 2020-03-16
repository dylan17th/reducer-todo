export const initialState= {
    todo: [
        {
    task: 'learn react',
    id: 1,
    completed: false
    },
        {
    task: 'learn CSS',
    id: 2,
    completed: false
    }
]
}


export const reducer = (state, action) =>{
    switch(action.type){
        case 'ADD_TODO':
            return{ 
                ...state,
                todo: [...state.todo, action.payload ]
            }
            default:
                return state;
    }
}