export const getUser = (id) => {
    return (
        $.ajax({
            url: `/api/users/${id}`,
            method: 'GET'
        })
    )
}

export const getUsers = (data) => {
    return (
        $.ajax({
            url: '/api/users',
            method: 'GET',
            data
        })
    )
}