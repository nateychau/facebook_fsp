export const sendFriendRequest = friend_request => {
    return (
        $.ajax({
            url: '/api/friend_requests',
            method: 'POST',
            data: { friend_request }
        })
    )
}

export const deleteFriendRequest = requestId => {
    return (
        $.ajax({
            url: `/api/friend_requests/${requestId}`,
            method: 'DELETE'
        })
    )
}