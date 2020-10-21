import { RECEIVE_CURRENT_USER } from '../../actions/session/session_actions'
import { RECEIVE_USER, RECEIVE_USERS } from '../../actions/user_actions';

export const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type){
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {[action.data.user.id]: action.data.user})
        case RECEIVE_USER:
            return Object.assign({}, state, {[action.data.user.id]: action.data.user})
        case RECEIVE_USERS: 
            let newState = Object.assign({}, state);
            Object.values(action.users).forEach((user)=>{
                newState[user.id] = user;
            })
            return newState;
        default:
            return state
    }
}