import {createStore,combineReducers,applyMiddleware} from 'redux';
import empReducer from './reducer/empReducer';
import thunk from 'redux-thunk'

var reducer = combineReducers({empReducer})
var store = new createStore(reducer,applyMiddleware(thunk))
export default store