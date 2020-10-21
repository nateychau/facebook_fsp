import { RECEIVE_CURRENT_USER } from '../../actions/session/session_actions';
// import { RECEIVE_USER } from '../../actions/user_actions';
import { RECEIVE_FRIEND_REQUEST, DELETE_FRIEND_REQUEST } from '../../actions/friend_request_actions';

export const friendRequestReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch (action.type){
        case RECEIVE_CURRENT_USER:
            if(action.data.friend_requests){
                Object.values(action.data.friend_requests).forEach(request => {
                    newState[request.id] = request;
                });
            }
            return newState;
        case RECEIVE_FRIEND_REQUEST:
            newState[action.friendRequest.id] = action.friendRequest;
        case DELETE_FRIEND_REQUEST:
            delete newState[action.friendRequest.id];
            return newState;
        default:
            return state;
    }
}