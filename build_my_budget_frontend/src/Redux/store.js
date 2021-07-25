import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import logger from "redux-logger";
import rootReducer from "./rootReducer.js";
const middlewares = [thunk,logger];



export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState,
                                       applyMiddleware(...middlewares));
    return store;
}
