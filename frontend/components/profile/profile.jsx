import { connect } from 'react-redux';
import React from 'react';
import Header from './header';
import { Redirect } from 'react-router-dom'
import Wall from './wall';
import PostModal from '../posts/post_modal';
import PostButton from '../posts/post_button';
// import MainProfile from './main_profile';

const mSTP = (state, ownProps) => {
    return ({
        user: state.entities.users[ownProps.match.params.userId]
    })
}

const Profile = (props) => {
        // if(!props.user){
        //     return <Redirect to="/" />
        //  }else{
        //      return (
        //         <div className='profile-page'>
        //             <PostModal />
        //             <Header />
        //             <Wall />
        //             <PostButton />
        //         </div>
        //      )
        //  }
        return !props.user ? <Redirect to="/" /> :
        <div className='profile-page'>
            <PostModal />
            <Header />
            <div className="profile-main">
                <div className="profile-sticky">
                    <h2>Intro</h2>
                </div>
                <div className="profile-scroll">
                    
                    <PostButton />
                    <Wall />
                </div>
            </div>
        </div>
}





export default connect(mSTP)(Profile);