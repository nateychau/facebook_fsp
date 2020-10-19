import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// const mSTP = (state, ownProps) => ({
//     user: state.entities.users[ownProps.match.params.userId]
// })


export default class ProfileThumb extends React.Component{
    constructor(props){
        super(props);
    }

    
    render(){
        return(
            <div className="profile-thumb-container">
                <div className="prof-pic">
                    <img src={this.props.user.profile_photo}></img>
                </div>
                <h2>{`${this.props.user.first_name} ${this.props.user.last_name}`}</h2>
                <span>{this.props.user.bio}</span>
            </div>
        )
    }


}


// export default withRouter(connect(mSTP)(ProfileThumb));