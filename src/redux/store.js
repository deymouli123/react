import { applyMiddleware, compose, createStore } from 'redux';
import PageReducer from './page/PageReducer';
const composer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(PageReducer,composer(applyMiddleware()));
export default store;



