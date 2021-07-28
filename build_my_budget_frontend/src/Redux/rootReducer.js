import { combineReducers } from 'redux';
import { entryReducer, categoryReducer } from './reducers';

const rootReducer = combineReducers({
    categories: categoryReducer,
    entries: entryReducer
});
export default rootReducer;
