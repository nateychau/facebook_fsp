import React from 'react';

export default (props) => {
    if(!props.numLikes){
        return null;
    }

    return (
        <div className='comment-like-counter'>
            <div className="like-icon"></div>
            <div>{props.numLikes}</div>
        </div>
    )
}