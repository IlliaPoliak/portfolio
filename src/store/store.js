import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { register } from './reducers/register';
import { testing } from './reducers/testing';
import { filter } from './reducers/filters';
import { tasks } from './reducers/tasks';
import { app } from './reducers/app';
import { table } from './reducers/table';
import { reducer as formReducer } from 'redux-form'
import { save } from 'redux-localstorage-simple';


let reducers = combineReducers({
    register,
    testing,
    form: formReducer,
    filter,
    tasks,
    app,
    table
})

export const store = createStore(reducers, applyMiddleware(save({namespace: 'portfolio-app'}), thunkMiddleware))