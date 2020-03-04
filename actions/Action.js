import {UPDATE_STORE_FROM_FIREBASE, ADD_TODO, UPDATE_CHANGED_VALUE} from '../constants/todoConstants'

export const updateStoreWithFirbaseData = (payload) => {
    return ({
        type : UPDATE_STORE_FROM_FIREBASE,
        payload
    })
}

export const addTodo = (payload) => {
    return({
        type : ADD_TODO,
        payload
    })
}

export const updateChangedValue = (payload) => {
    return({
        type : UPDATE_CHANGED_VALUE,
        payload
    })
}