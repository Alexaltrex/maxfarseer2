import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import authReducer from "./auth-reducer";
import newsReducer from "./news-reducer";

let rootReducers = combineReducers({
    auth: authReducer,
    news: newsReducer
});

let store = createStore(rootReducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;