import {ADD_TODO, TOGGLE_COMPLETED, UPDATE_STORE_FROM_FIREBASE, UPDATE_CHANGED_VALUE} from '../constants/todoConstants'

const Todo = (state=[], action) => {
    switch(action.type) {    
        case ADD_TODO:
            return state
        
        case UPDATE_STORE_FROM_FIREBASE :
            return [...state, action.payload]

        case UPDATE_CHANGED_VALUE:
            let newState = []
            state.forEach(element => {
                if(element['id'] == action.payload){
                    element['completed'] = !element['completed']
                }
                newState.push(element)
            });
            return newState

        default : 
            return(state);

    }
}

export default Todo;