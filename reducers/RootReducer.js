import {combineReducers} from 'redux';
import TodoReducer from './TodoReducer'

 const RootReducer = combineReducers(
    {
        todo : TodoReducer,
    }
);
export default RootReducer;

