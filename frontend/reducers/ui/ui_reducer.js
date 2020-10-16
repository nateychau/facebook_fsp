import modalReducer from './modal_reducer';
import filterReducer from './filter_reducer'
import { combineReducers } from 'redux';

export default combineReducers({
    modal: modalReducer,
    filters: filterReducer
});