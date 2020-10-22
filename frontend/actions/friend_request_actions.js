import * as FriendRequestAPIUtil from '../util/friend_request_api_util';
import { receiveErrors } from './session/session_actions';
import { findRequestId } from '../reducers/selectors/friend_request_selectors';

export const RECEIVE_FRIEND_REQUEST = 'RECEIVE_FRIEND_REQUEST';
// export const RECEIVE_ALL_FRIEND_REQUESTS = 'RECEIVE_ALL_FRIEND_REQUESTS';
export const DELETE_FRIEND_REQUEST = 'DELETE_FRIEND_REQUEST';

const receiveFriendRequest = (friendRequest) => {
    return ({
        type: RECEIVE_FRIEND_REQUEST,
        friendRequest
    })
}

// const receiveAllFriendRequests = (data) => {
//     return ({
//         type: RECEIVE_ALL_FRIEND_REQUESTS,
//         data
//     })
// }

const deleteFriendRequestObj = (friendRequest) => {
    return ({
        type: DELETE_FRIEND_REQUEST,
        friendRequest
    })
}

export const sendFriendRequest = (friendRequest) => (dispatch) => {
    return (
        FriendRequestAPIUtil.sendFriendRequest(friendRequest)
            .then(
                request => dispatch(receiveFriendRequest(request)),
                err => dispatch(receiveErrors(err))
            )
    )
}

export const deleteFriendRequest = (friendRequestId) => (dispatch) => {
    return (
        FriendRequestAPIUtil.deleteFriendRequest(friendRequestId)
            .then(
                request => dispatch(deleteFriendRequestObj(request)),
                err => dispatch(receiveErrors(err))
            )
    )
}

export const deleteFriendRequestWithState = (requesterId, requestedId) => (dispatch, getState) => {
    let requestId = findRequestId(getState().entities.friendRequests, requesterId, requestedId);
    return (
        FriendRequestAPIUtil.deleteFriendRequest(requestId)
            .then(
                request => dispatch(deleteFriendRequestObj(request)),
                err => dispatch(receiveErrors(err))
            )
    )
}