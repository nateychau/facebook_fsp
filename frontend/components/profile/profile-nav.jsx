import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mSTP = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId]
})

class ProfileNav extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="profile-nav-container">
                <div className="profile-nav-bar">
                    <div className="profile-nav-links">
                       <div><p>Timeline</p></div>
                       <div><p>About</p></div>
                       <div><p>Friends</p></div>
                       <div><p>Photos</p></div>
                    </div>
                    <button className="profile-nav-button">Edit Profile</button>
                </div>
            </div>
        )
    }
}

export default withRouter(connect(mSTP, null)(ProfileNav))