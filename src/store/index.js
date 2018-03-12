import { createStore, combineReducers, applyMiddleware } from 'redux';
import TodoListReducer from './reducers/todoReducer';
import logger from 'redux-logger'
import thunk from 'redux-thunk'

let store = createStore( combineReducers({TodoListReducer}) , applyMiddleware(thunk,logger) )

export default store;