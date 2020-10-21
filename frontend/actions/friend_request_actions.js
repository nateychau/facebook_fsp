import * as FriendRequestAPIUtil from '../util/friend_request_api_util';
import { receiveErrors } from './session/session_actions';

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

export const sendFriendRequest = (friendRequest) => {
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
