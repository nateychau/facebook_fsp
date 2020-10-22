import * as PostAPIUtil from '../util/post_api_util';
import { receiveErrors } from './session/session_actions';
import { getFriends } from '../reducers/selectors/friendship_selectors';

import { getCurrentUser } from './user_actions';

export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const DELETE_POST = "DELETE_POST";
export const CLEAR_POSTS = "CLEAR_POSTS"

const receivePost = (post) => {
    return ({
        type: RECEIVE_POST,
        post
    })
}

const receiveAllPosts = (data) => {
    return ({
        type: RECEIVE_ALL_POSTS,
        data
    })
}

const deletePostObj = (post) => {
    return ({
        type: DELETE_POST,
        post
    })
}

export const clearPosts = () => {
    return ({
        type: CLEAR_POSTS
    })
}


export const publishPost = (post) => (dispatch) => {
    return (
        PostAPIUtil.publishPost(post)
            .then(
                post => dispatch(receivePost(post)),
                err => dispatch(receiveErrors(err))
            )
    )
}

//DESTROY PATH RENDERS A POST OBJ
export const deletePost = (postId) => (dispatch) => {
    return (
        PostAPIUtil.deletePost(postId)
            .then(
                post => dispatch(deletePostObj(post)),
                err => dispatch(receiveErrors(err))
            )
    )
}

export const editPost = (post) => (dispatch) => {
    return (
        PostAPIUtil.editPost(post)
            .then(
                post => dispatch(receivePost(post)),
                err => dispatch(receiveErrors(err))
            )
    )
}

export const getPosts = (filter) => (dispatch) => {
    return (
        PostAPIUtil.getPosts(filter)
            .then(
                posts => dispatch(receiveAllPosts(posts)),
                err => dispatch(receiveErrors(err))
            )
    )
}

// export const getPostsByFriends = () => (dispatch, getState) => {
//     let myFriends = getFriends(getState().session.currentUser, getState().entities.friendships);
//     return (
//         PostAPIUtil.getPosts({userId: myFriends})
//             .then(
//                 posts => dispatch(receiveAllPosts(posts)),
//                 err => dispatch(receiveErrors(err))
//             )
//     )
// }

export const getCurrentUserFeed = () => (dispatch, getState) => {
    dispatch(getCurrentUser())
    return getPosts({userId: getState().session.currentUser})(dispatch);
}

// export const updateFilter = (filter, value) => (dispatch, getState) => {
//     dispatch(changeFilter(filter, value));
//     return getPosts(getState().ui.filters)(dispatch)
//       // .then(()=>{
//       //   dispatch(getUsers(getAuthors(getState().entities.posts, getState().entities.comments)))
//       // })
//   };
  