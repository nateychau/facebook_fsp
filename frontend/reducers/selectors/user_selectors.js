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

export const getUsersFromQuery = (users, queryString) => {
  if(!queryString.length) this.setState({results: []});
    else {
      const results = [];
      for (let key in users){
        const user = users[key];
        const firstName = user.first_name.toLowerCase();
        const lastName = user.last_name.toLowerCase();
        if(
          queryString.includes(firstName) ||
          queryString.includes(lastName) ||
          firstName.slice(0, queryString.length) === queryString ||
          lastName.slice(0, queryString.length) === queryString
          ){
            results.push(user);
        }
      }
      return results
    }
  }