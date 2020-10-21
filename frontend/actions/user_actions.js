import * as UserAPIUtil from '../util/user_api_util';
import { receiveErrors } from './session/session_actions';
import { receiveCurrentUser } from './session/session_actions';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';

const receiveUser = (data) => {
    return ({
        type: RECEIVE_USER,
        data
    })
}

const receiveUsers = (users) => {
    return ({
        type: RECEIVE_USERS,
        users
    })
}


export const getUser = (id) => (dispatch) => {
    return (
        UserAPIUtil.getUser(id)
            .then(
                user => dispatch(receiveUser(user)),
                err => dispatch(receiveErrors(err))
            )
    ) 
}

export const getUsers = (idArr) => (dispatch) => {
    return (
        UserAPIUtil.getUsers({idArr: idArr})
            .then(
                users => dispatch(receiveUsers(users)),
                err => dispatch(receiveErrors(err))
            )
    )
}

export const updateUser = (user) => (dispatch) => {
    return (
        UserAPIUtil.updateUser(user)
            .then(
                user => dispatch(receiveUser(user)),
                err => dispatch(receiveErrors(err))
            )
    )
}

export const updateUserPhoto = (user) => (dispatch) => {
    return (
        UserAPIUtil.updateUserPhoto(user)
            .then(
                user => dispatch(receiveUser(user)),
                err => dispatch(receiveErrors(err))
            )
    )
}

export const getCurrentUser = () => (dispatch, getState) => {
    return (
        UserAPIUtil.getUser(getState().session.currentUser)
            .then(
                user => dispatch(receiveCurrentUser(user)),
                err => dispatch(receiveErrors(err))
            )
    )
}