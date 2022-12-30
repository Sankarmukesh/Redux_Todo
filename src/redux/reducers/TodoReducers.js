const intialState = {
    todos:[],
    singleTodo:null,
    loading:false
}

export const TodoReducers = (state=intialState,actions)=>{
        switch(actions.type) {
            case "ALL":
                return {...state,todos:actions.payload}
            case "DELETE":
                const todos = state.todos.filter(t=>t.id !== actions.payload)
                return {...state,todos:[...todos]}

       
            default:
                return state
        }
}