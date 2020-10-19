import React from 'react';
import ProfileThumb from './profile_thumb';
import CoverPhoto from './cover_photo';
import ProfileNav from './profile-nav';

export default ({user, currentUser}) => (
    <div className="profile-header">
        <CoverPhoto user={user} currentUser={currentUser}/>
        {/* <div className="transparent"></div> */}
        <ProfileThumb user={user} currentUser={currentUser}/>
        {/* <ProfileNav /> */}
        
    </div>
)