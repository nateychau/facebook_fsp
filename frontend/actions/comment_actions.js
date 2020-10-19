import * as CommentAPIUtil from '../util/comment_api_util';
import { receiveErrors } from './session/session_actions';

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";

const receiveComment = (comment) => {
    return ({
        type: RECEIVE_COMMENT,
        comment
    })
}

const deleteCommentObj = (comment) => {
    return ({
        type: DELETE_POST,
        comment
    })
}

export const publishComment = (comment) => (dispatch) => {
    return (
        CommentAPIUtil.publishComment(comment)
            .then(
                comment => dispatch(receiveComment(comment)),
                err => dispatch(receiveErrors(err))
            )
    )
}

export const deleteComment = (commentId) => (dispatch) => {
    return (
        CommentAPIUtil.deleteComment(comment)
            .then(
                comment => dispatch(deleteCommentObj(comment)),
                err => dispatch(receiveErrors(err))
            )
    )
}

export const editComment = (comment) => (dispatch) => {
    return (
        CommentAPIUtil.editComment(comment)
            .then(
                comment => dispatch(receiveComment(comment)),
                err => dispatch(receiveErrors(err))
            )
    )
}