import { RECEIVE_CURRENT_USER } from '../../actions/session/session_actions';
import { RECEIVE_FRIENDSHIP, DELETE_FRIENDSHIP } from '../../actions/friendship_actions';
import { RECEIVE_USER } from '../../actions/user_actions';

export const friendshipReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch (action.type){
        case RECEIVE_CURRENT_USER:
            if(action.data.friendships){
                Object.values(action.data.friendships).forEach(friendship => {
                    newState[friendship.id] = friendship
                })
            }
            return newState;
        case RECEIVE_USER: 
            if(action.data.friendships){
                Object.values(action.data.friendships).forEach(friendship => {
                    newState[friendship.id] = friendship
                })
            }
            return newState;
        case RECEIVE_FRIENDSHIP:
            newState[action.friendship.id] = action.friendship;
            return newState;
        case DELETE_FRIENDSHIP:
            delete newState[action.friendship.id]
            return newState;
        default:
            return state;
    }
}