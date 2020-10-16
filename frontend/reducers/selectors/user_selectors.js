export const getAuthors = (posts) => {
    let res = [];
    for (let id in posts){
        if(!res.includes(posts[id].author_id)){
            res.push(posts[id].author_id);
        }
    }
    return res
}

