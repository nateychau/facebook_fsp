import { RECEIVE_LIKE, DELETE_LIKE } from '../../actions/like_actions';
import { RECEIVE_CURRENT_USER } from '../../actions/session/session_actions';
import { RECEIVE_USER } from '../../actions/user_actions';
import { RECEIVE_ALL_POSTS, CLEAR_POSTS, DELETE_POST } from '../../actions/post_actions';
import { DELETE_COMMENT } from '../../actions/comment_actions';
import { getLikesOfLikeable, getLikesFromComments } from '../selectors/like_selectors';

export const likeReducer = (state={}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    let likes;
    switch (action.type){
        case RECEIVE_LIKE:
            newState[action.like.id] = action.like;
            return newState;
        case DELETE_LIKE: 
            delete newState[action.like.id];
            return newState;
        case RECEIVE_ALL_POSTS:
            if(action.data.likes){
                Object.values(action.data.likes).forEach(like => {
                    newState[like.id] = like
                })
            }
            return newState
        case CLEAR_POSTS:
            return {}
        case DELETE_POST:
            let postLikes = getLikesOfLikeable(newState, action.post.id, 'Post');
            let commentLikes = getLikesFromComments(newState, action.comments)
            likes = postLikes.concat(commentLikes);
            likes.forEach(like => {
                delete newState[like.id];
            })
            return newState;
        case DELETE_COMMENT:
            likes = getLikesOfLikeable(newState, action.comment.id, 'Comment');
            likes.forEach(like => {
                delete newState[like.id];
            })
            return newState;
        // case RECEIVE_CURRENT_USER:
        //     if(action.data.likes){
        //         Object.values(action.data.likes).forEach(like => {
        //             newState[like.id] = like;
        //         });
        //     }
        //     return newState;
        // case RECEIVE_USER:
        //     if(action.data.likes){
        //         Object.values(action.data.likes).forEach(like => {
        //             newState[like.id] = like;
        //         });
        //     }
        //     return newState;
        default:
            return state;
            
    }
}