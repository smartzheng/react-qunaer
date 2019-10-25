import { createStore, combineReducers, applyMiddleware } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'

let state = {

}

export default createStore(
    combineReducers(reducers),
    state,
    applyMiddleware(thunk)
)