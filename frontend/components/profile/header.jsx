import React from 'react';
import ProfileThumb from './profile_thumb';
import CoverPhoto from './cover_photo';
import ProfileNav from './profile-nav';

export default () => (
    <div className="profile-header">
        <CoverPhoto />
        <div className="transparent"></div>
        <ProfileThumb />
        <ProfileNav />
        
    </div>
)