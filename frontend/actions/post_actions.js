import * as PostAPIUtil from '../util/post_api_util';
import { receiveErrors } from './session/session_actions'

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

const receiveAllPosts = (posts) => {
    return ({
        type: RECEIVE_ALL_POSTS,
        posts
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
                post => dispatch
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