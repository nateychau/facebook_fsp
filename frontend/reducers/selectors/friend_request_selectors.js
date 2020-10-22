export const getIncomingFriendRequests = (requests, requestedId) => {
    let result = [];
    for (let id in requests) {
        if (requests[id].requested_id === parseInt(requestedId)) {
            result.push(requests[id].requester_id);
        }
    }
    return result;
}

export const getOutgoingFriendRequests = (requests, requesterId) => {
    let result = [];
    for (let id in requests) {
        if (requests[id].requester_id === parseInt(requesterId)) {
            result.push(requests[id].requested_id);
        }
    }
    return result;
}

export const findRequestId = (requests, requesterId, requestedId) => {
    for (let id in requests){
        let request = requests[id];
        if (request.requester_id === requesterId && request.requested_id === requestedId){
            return id
        }
    }
}