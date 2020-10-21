export const sendFriendRequest = request => {
    return (
        $.ajax({
            url: '/api/friend_requests',
            method: 'POST',
            data: { request }
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