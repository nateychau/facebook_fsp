import { RECEIVE_CURRENT_USER, RECEIVE_SIGNUP_ERRORS, CLEAR_ERRORS } from '../../actions/session/session_actions'


export const signupErrorsReducer = (state=[], action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_SIGNUP_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return [];
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
}