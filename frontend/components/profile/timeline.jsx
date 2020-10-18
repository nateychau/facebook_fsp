import React from 'react'
import Wall from './wall';
import PostButton from '../posts/post_button';

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
                        <div>Studied at: {this.props.user.school}</div>
                        <div>Lives in: {this.props.user.location}</div>
                        <div>Born on: {this.props.user.birthday}</div>
                        <div>Bio: {this.props.user.bio}</div>
                    </div>
                    <div className="profile-photos">
                        <div>Photos</div>
                        {/* may need to refactor into components */}
                    </div>
                    <div className="profile-friends">
                        <div>Friends</div>
                    </div>
                </div>
                {/* for right side scroll elements */}
                <div className="profile-scroll">
                    <div className="post-button-container">
                        <div className="prof-pic-thumb-small">
                            <img src={window.testProfile}></img>
                        </div>
                        <PostButton />
                    </div>
                    <Wall />
                </div>
            </>
        )
    }
}