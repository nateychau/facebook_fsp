import React from 'react';
import FriendRequestNotif from './friend_request_notif';


export default (props) => {
    const requestList = props.requests.length ? 
    props.requests.map(request => {
        return <FriendRequestNotif key={request.id} request={request}/>
    })    
    : <div>You have no new notifications</div>
    return (
        <div className="util-container">
            <ul>
                <div>Notifications</div>
                {requestList}
            </ul>
        </div>
    )
}

