export const getFriendships = (user_id, friendships) => {
    let result = [];
    for (let id in friendships) {
        if (friendships[id].user_id === parseInt(user_id)){
            result.push(friendships[id]);
        }
    }
    return result
}

export const getFriends = (user_id, friendships) => {
    let result = [];
    for (let id in friendships){
        if(friendships[id].user_id === parseInt(user_id)){
            result.push(friendships[id].friend_id);
        }
    }
    return result;
}

export const findFriendshipId = (friendships, user_id, friend_id) => {
    for (let id in friendships){
        let friendship = friendships[id];
        if (friendship.user_id === user_id && friendship.friend_id === friend_id){
            return id
        }
    }
}