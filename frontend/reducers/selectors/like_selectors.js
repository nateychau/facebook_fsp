export const getLikesOfLikeable = (likes, likeable_id, likeable_type) => {
    let result = [];
    for (let id in likes) {
        if (likes[id].likeable_id === parseInt(likeable_id) && likes[id].likeable_type === likeable_type){
            result.push(likes[id]);
        }
    }
    return result;
}

export const getLikesFromComments = (likes, commentArray) => {
    let result = [];
    for (let id in likes) {
        if(commentArray.includes(likes[id].likeable_id) && likes[id].likeable_type === 'Comment' ){
            result.push(likes[id])
        }
    }
    return result;
}

export const findLike = (likes, likeable_id, likeable_type, user_id) => {
    for (let id in likes) {
        let like = likes[id];
        if(
            like.likeable_id === likeable_id &&
            like.likeable_type === likeable_type && 
            like.user_id === user_id
        ){
            return like;
        }
    }
    return false;
}
