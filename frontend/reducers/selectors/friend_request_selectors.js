export const getIncomingFriendRequests = (requests, requestedId) => {
    let result = [];
    for (let id in requests) {
        if (requests[id].requested_id === parseInt(requestedId)) {
            result.push(requests[id]);
        }
    }
    return result;
}

export const getOutgoingFriendRequests = (requests, requesterId) => {
    let result = [];
    for (let id in requests) {
        if (requests[id].requester_id === parseInt(requesterId)) {
            result.push(requests[id]);
        }
    }
    return result;
}