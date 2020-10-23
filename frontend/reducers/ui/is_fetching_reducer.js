import { REQUEST_USER, RECEIVE_USER, RECEIVE_USERS } from '../../actions/user_actions'

const isFetchingReducer = (state=false, action) => {
    Object.freeze(state);
    switch(action.type){
        case REQUEST_USER:
            return true
        case RECEIVE_USER:
            return false
        case RECEIVE_USERS:
            return false
        default:
            return state;
    }
}

export default isFetchingReducer;