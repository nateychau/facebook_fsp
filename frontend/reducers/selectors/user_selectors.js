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

