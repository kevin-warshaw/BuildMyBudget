import { combineReducers } from 'redux';
import { entryReducer, categoryReducer } from './reducers';

const rootReducer = combineReducers({
    categories: categoryReducer,
    entryReducer: entryReducer
});
export default rootReducer;
