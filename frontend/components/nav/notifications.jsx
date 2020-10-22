import React from 'react';
import FriendRequestNotif from './friend_request_notif';


export default (props) => {
    const requesterList = props.requests.length ? 
    props.requests.map(requester => {
        return <FriendRequestNotif key={requester} requesterId={requester}/>
    })    
    : <div>You have no new notifications</div>
    return (
        <div className="util-container">
            <ul className="notif-list">
                <div>Notifications</div>
                {requesterList}
            </ul>
        </div>
    )
}

