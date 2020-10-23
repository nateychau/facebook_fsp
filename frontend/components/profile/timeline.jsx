import React from 'react'
import Wall from './wall';
import PostButton from '../posts/post_button';
import Friends from './friends';
import Photos from './photos'

export default class Timeline extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return (
            <>
                {/* for left side sticky elements */}
                <div className="profile-sticky"> 
                    <div className="profile-intro">
                        <div>Intro</div>
                        <div className='intro-row'><div className="work-icon"/>Work: {this.props.user.work}</div>
                        <div className='intro-row'><div className="school-icon"/>Studied at: {this.props.user.school}</div>
                        <div className='intro-row'><div className="location-icon"/>Lives in: {this.props.user.location}</div>
                        <div className='intro-row'><div className="birthday-icon"/>Born on: {this.props.user.birthday}</div>
                    </div>
                    <Photos full={false} />
                    <div className="profile-friends">
                        <Friends user={this.props.user} full={false}/>
                    </div>
                </div>
                {/* for right side scroll elements */}
                <div className="profile-scroll">
                {this.props.notFriends ? <></> :
                    <div className="post-button-container">
                        <div className="prof-pic-thumb-small">
                            <img src={this.props.currentUser.profile_photo}></img>
                        </div>
                         <PostButton />
                    </div>
                }
                    {this.props.notFriends ? <Wall notFriends={true}/> : <Wall/>}
                </div>
            </>
        )
    }
}