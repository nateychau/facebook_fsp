import React from 'react';
import ProfileThumb from './profile_thumb';
import CoverPhoto from './cover_photo';
import ProfileNav from './profile-nav';

export default ({user}) => (
    <div className="profile-header">
        <CoverPhoto user={user}/>
        {/* <div className="transparent"></div> */}
        <ProfileThumb user={user}/>
        {/* <ProfileNav /> */}
        
    </div>
)