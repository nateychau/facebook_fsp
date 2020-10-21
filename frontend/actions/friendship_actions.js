import * as FriendshipAPIUtil from '../util/friendship_api_util';
import { receiveErrors } from './session/session_actions';

export const RECEIVE_FRIENDSHIP = 'RECEIVE_FRIENDSHIP';
export const DELETE_FRIENDSHIP = 'DELETE_FRIENDSHIP';

const receiveFriendship = (friendship) => {
    return ({
        type: RECEIVE_FRIENDSHIP,
        friendship
    })
}

const deleteFriendshipObj = (friendship) => {
    return ({
        type: DELETE_FRIENDSHIP,
        friendship
    })
}

export const createFriendship = (friendship) => {
    return (
        FriendshipAPIUtil.createFriendship(friendship)
            .then(
                friendship => dispatchEvent(receiveFriendship(friendship)),
                err => dispatchEvent(receiveErrors(err))
            )
    )
}

export const deleteFriendship = (friendship) => {
    return (
        FriendshipAPIUtil.deleteFriendship(friendship)
            .then(
                friendship => dispatchEvent(deleteFriendshipObj(friendship)),
                err => (dispatch(receiveErrors(err)))
            )
    )
}