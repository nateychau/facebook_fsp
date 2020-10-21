export const getAuthors = (posts, comments) => {
    let res = [];
    for (let id in posts){
        if(!res.includes(posts[id].author_id)){
            res.push(posts[id].author_id);
        }
    }
    for (let id in comments){
        if(!res.includes(comments[id].author_id)){
            res.push(posts[id].author_id);
        }
    }
    return res
}

//THIS METHOD IS FOR AN ARRAY OF FRIEND REQUESTS
export const getRequesters = (requests) => {
    let res = [];
    requests.forEach(request => {
        if(!res.includes(request.requester_id)){
            res.push(request.requester_id)
        }
    })
    return res;
}