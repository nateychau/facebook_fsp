import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { sendFriendRequest, deleteFriendRequestWithState } from '../../actions/friend_request_actions';
import { findRequestId } from '../../reducers/selectors/friend_request_selectors';


// const mSTPCancel = (state, ownProps) => {
//     return {
//         reqId: findRequestId(state.entities.friendRequests, ownProps.currentUser.id, ownProps.wallUser.id)
//     }
// }

const mDTPSend = (dispatch, ownProps) => {
    let req = {requester_id: ownProps.currentUserId, requested_id: ownProps.wallUserId}
    return {
        handleRequest: () => dispatch(sendFriendRequest(req))
    }
}

const mDTPCancel = (dispatch, ownProps) => {
    return {
        handleRequest: () => dispatch(deleteFriendRequestWithState(ownProps.currentUserId, ownProps.wallUserId))
    }
}

const FriendRequestButton = (props) => {
    return (
        <button className="profile-nav-button" onClick={props.handleRequest}>
            <div className={`${props.icon}`}></div>
                {props.text}
        </button>
    )
}

export const SendRequest = connect(null, mDTPSend)(FriendRequestButton);
export const CancelRequest = connect(null, mDTPCancel)(FriendRequestButton);