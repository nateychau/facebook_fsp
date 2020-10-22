import modalReducer from './modal_reducer';
import filterReducer from './filter_reducer'
import { combineReducers } from 'redux';
import isFetchingReducer from './is_fetching_reducer';

export default combineReducers({
    modal: modalReducer,
    filters: filterReducer,
    isFetching: isFetchingReducer
});