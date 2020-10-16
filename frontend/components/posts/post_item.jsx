import React from 'react';

export default ({post, author}) => {
    return (
        <li>
            <h2>{`${author.first_name} ${author.last_name}`}</h2>
            <p>{post.body}</p>
        </li>
    )
}
