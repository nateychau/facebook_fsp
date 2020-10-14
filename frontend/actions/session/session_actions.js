import * as SessionAPIUtil from '../../util/session/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"
export const RECEIVE_LOGIN_ERRORS = "RECEIVE_LOGIN_ERRORS";
export const RECEIVE_SIGNUP_ERRORS = "RECEIVE_SIGNUP_ERRORS";
export const CLEAR_ERRORS = "CLEAR ERRORS";

const receiveCurrentUser = (currentUser) => {
    return ({
        type: RECEIVE_CURRENT_USER,
        currentUser 
    });
}

const logoutCurrentUser = () => {
    return ({
        type: LOGOUT_CURRENT_USER,
    });
}

const receiveErrors = (errors) => {
    return ({
        type: RECEIVE_ERRORS,
        errors: errors.responseJSON
    })
}

const receiveLoginErrors = (errors) => {
    return ({
        type: RECEIVE_LOGIN_ERRORS,
        errors: errors.responseJSON
    })
}

const receiveSignupErrors = (errors) => {
    return ({
        type: RECEIVE_SIGNUP_ERRORS,
        errors: errors.responseJSON
    })
}

export const clearErrors = () => {
    return ({
        type: CLEAR_ERRORS
    })
}

export const login = (user) => (dispatch) => (
    SessionAPIUtil.logIn(user)
        .then((user) => (dispatch(receiveCurrentUser(user))), (errors) => (dispatch(receiveLoginErrors(errors))))
)

export const logout = () => (dispatch) => (
    SessionAPIUtil.logOut()
        .then(() => (dispatch(logoutCurrentUser())), (errors) => (dispatch(receiveErrors(errors))))
)

export const signup = (user) => (dispatch) => (
    SessionAPIUtil.signUp(user)
        .then((user) => (dispatch(receiveCurrentUser(user))), (errors) => (dispatch(receiveSignupErrors(errors))))
)