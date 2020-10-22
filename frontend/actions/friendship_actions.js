import * as FriendshipAPIUtil from '../util/friendship_api_util';
import { receiveErrors } from './session/session_actions';
import { findFriendshipId } from '../reducers/selectors/friendship_selectors';

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

export const createFriendship = (friendship) => (dispatch) => {
    return (
        FriendshipAPIUtil.createFriendship(friendship)
            .then(
                friendship => dispatch(receiveFriendship(friendship)),
                err => dispatch(receiveErrors(err))
            )
    )
}

export const deleteFriendship = (friendship) => (dispatch) => {
    return (
        FriendshipAPIUtil.deleteFriendship(friendship)
            .then(
                friendship => dispatch(deleteFriendshipObj(friendship)),
                err => dispatch(receiveErrors(err))
            )
    )
}

export const deleteFriendshipWithState = (user_id, friend_id) => (dispatch, getState) => {
    let friendshipId = findFriendshipId(getState().entities.friendships, user_id, friend_id);
    return (
        FriendshipAPIUtil.deleteFriendship(friendshipId)
            .then(
                friendship => dispatch(deleteFriendshipObj(friendship)),
                err => dispatch(receiveErrors(err))
            )
    )
}