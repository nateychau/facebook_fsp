import React from 'react';

export default ({user}) => {
    const coverPhoto = user.cover_photo? <img src={user.cover_photo}></img> : <div className="cover-photo-placeholder"></div>
    return (
        <div className="cover-photo-container">
            {coverPhoto}
        </div>
    )
}