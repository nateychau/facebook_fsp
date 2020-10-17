import React from 'react';
import { Link } from 'react-router-dom'

export default ({post, author}) => {
    let timestamp = new Date(post.created_at).toDateString()
    return (
        <li className="post-item">
            <div className='post-item-header'>
                <div className="prof-pic-thumb-small">
                    <img src={window.testProfile}></img>
                </div>
                <div className="post-item-meta">
                    <Link to={`/users/${author.id}`}><div>{`${author.first_name} ${author.last_name}`}</div></Link>
                    <div>{timestamp}</div>
                </div>
            </div>
            <div className="post-item-body">{post.body}</div>
        </li>
    )
}
