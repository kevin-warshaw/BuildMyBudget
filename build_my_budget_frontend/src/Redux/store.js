import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';

import logger from "redux-logger";
import entryReducer, categoryReducer from "./reducers.js";
const middlewares = [thunk,logger];



export default function configureStore(initialState) {
    const store = createStore({entries: entryReducer, categories: categoryReducer}, initialState,
                                       applyMiddleware(...middlewares));
    return store;
}
