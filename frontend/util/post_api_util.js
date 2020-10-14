export const publishPost = post => {
    return (
      $.ajax({
        url: '/api/posts',
        method: 'POST',
        data: { post }
      })
      )}
  
  
export const deletePost = (postId) => {
    return (
      $.ajax({
        url: `/api/posts/${postId}`,
        method: 'DELETE'
      })
    )
}

export const editPost = post => {
    return (
        $.ajax({
            url: `/api/posts/${post.id}`,
            method: 'PATCH',
            data: { post }
        })
    )
}

export const getPosts = () => {
    return (
        $.ajax({
            url: '/api/posts',
            method: 'GET'
        })
    )
}