import { RECEIVE_ALL_POSTS, CLEAR_POSTS } from '../../actions/post_actions';
import { RECEIVE_COMMENT, DELETE_COMMENT } from '../../actions/comment_actions';

export const commentReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch(action.type){
        case RECEIVE_ALL_POSTS:
            Object.values(action.data.comments).forEach(comment => {
                newState[comment.id] = comment
            })
            return newState;
        case CLEAR_POSTS:
            return {};
        case RECEIVE_COMMENT:
            newState[action.comment.id] = action.comment;
            return newState;
        case DELETE_COMMENT:
            newState[action.comment.id] = undefined;
            return newState;
        default:
            return state; 
    }
}