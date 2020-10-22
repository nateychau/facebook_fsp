import { RECEIVE_ALL_POSTS, CLEAR_POSTS, DELETE_POST } from '../../actions/post_actions';
import { RECEIVE_COMMENT, DELETE_COMMENT } from '../../actions/comment_actions';
import { getCommentIdsByPost } from '../selectors/comment_selectors'

export const commentReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch(action.type){
        case RECEIVE_ALL_POSTS:
            if(action.data.comments){
                Object.values(action.data.comments).forEach(comment => {
                    newState[comment.id] = comment
                })
            }
            return newState;
        case CLEAR_POSTS:
            return {};
        case DELETE_POST:
            if(action.comments){
                action.comments.forEach(commentId =>{
                    delete newState[commentId]
                })
            }
            // let comments = getCommentIdsByPost(newState, action.post.id);
            // comments.forEach(commentId => {
            //     delete newState[commentId];
            // })
            return newState;
        case RECEIVE_COMMENT:
            newState[action.comment.id] = action.comment;
            return newState;
        case DELETE_COMMENT:
            delete newState[action.comment.id];
            return newState;
        default:
            return state; 
    }
}