import rootReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;