import { connect } from 'react-redux';
import React from 'react';
import Header from './header';
import { Redirect } from 'react-router-dom'
// import MainProfile from './main_profile';

const mSTP = (state, ownProps) => {
    return ({
        user: state.entities.users[ownProps.match.params.userId]
    })
}

const Profile = (props) => (
    props.user ? <Header /> : <Redirect to="/" />
)





export default connect(mSTP)(Profile);