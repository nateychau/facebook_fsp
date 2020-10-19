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

export const updateUser = (formData) => {
    return (
        $.ajax({
            url: `/api/users/${formData.get('user[id]')}`,
            method: 'PATCH',
            data: formData,
            contentType: false,
            processData: false
        })
    )
}