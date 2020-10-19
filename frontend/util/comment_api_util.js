export const publishComment = comment => {
    return (
        $.ajax({
            url: '/api/comments',
            method: 'POST',
            data: { comment }
        })
    )
}

export const deleteComment = (commentId) => {
    return (
        $.ajax({
            url: `/api/comments/${commentId}`,
            method: 'DELETE'
        })
    )
}

export const editComment = comment => {
    return (
        $.ajax({
            url: `/api/comments/${comment.id}`,
            method: 'PATCH', 
            data: { comment }
        })
    )
}

//getComments is handled by getPosts