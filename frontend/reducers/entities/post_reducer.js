import { 
    RECEIVE_ALL_POSTS,
    RECEIVE_POST,
    DELETE_POST,
 } from '../../actions/post_actions';

export const postReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch (action.type){
        case RECEIVE_ALL_POSTS:
            Object.values(action.posts).forEach(post => {
                newState[post.id] = post
            })
            return newState;
        case RECEIVE_POST:
            newState[action.post.id] = action.post;
            return newState;
        case DELETE_POST:
            newState[action.post.id] = undefined;
            return newState;
        default:
            return state
    }
}