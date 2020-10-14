import * as PostAPIUtil from '../util/post_api_util';

export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const DELETE_POST = "DELETE_POST";

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

const deletePost = (postId) => {
    return ({
        type: DELETE_POST,
        postId
    })
}


export const createPost = (post) => (dispatch)=> {
    return (
        PostAPIUtil.publishPost(post)
            .then(
                post => dispatch(receivePost(post))
            )
    )
}