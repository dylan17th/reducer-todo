export const initialState= {
    todo: []
}

export const reducer = (state, action) =>{
    switch(action.type){
        case 'ADD_TODO':
            return{ 
                ...state,
                todo: [...state.todo, action.payload]
            }
        case 'MARKING_AS_COMPLETE':
            return{
                ...state,
                todo: state.todo.map( task => {
                    if(task.id === action.payload){
                        return{
                            ...task,
                            completed: !task.completed
                           }
                        }else{
                            return task
                        }
                    })
                    
                }
        case 'CLEARING_COMPLETED': 
            return {
                ...state,
                todo: state.todo.filter( task => {
                    if(task.completed === true){
                        return null
                        }else {
                            return task
                        }
                    })
                }
            default:
                return state;
    }
}
