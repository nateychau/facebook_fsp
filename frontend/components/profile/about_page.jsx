import React from 'react';
import { updateUser } from '../../actions/user_actions';
import { connect } from 'react-redux';
import AboutRow from './about_row'

const mDTP = (dispatch) => {
    return {
        updateUser: (user) => dispatch(updateUser(user)) 
    }
}

class About extends React.Component{
    constructor(props){
        super(props)
    }

    
    render(){
        return (
            <div className='profile-intro full'>
                <div className="profile-intro-header">About</div>
                <AboutRow currentUser={this.props.currentUser} user={this.props.user} updateUser={this.props.updateUser} type='work'/>
                <AboutRow currentUser={this.props.currentUser} user={this.props.user} updateUser={this.props.updateUser} type='school'/>
                <AboutRow currentUser={this.props.currentUser} user={this.props.user} updateUser={this.props.updateUser} type='location'/>               
                <AboutRow currentUser={this.props.currentUser} user={this.props.user} updateUser={this.props.updateUser} type='birthday'/>                
                <AboutRow currentUser={this.props.currentUser} user={this.props.user} updateUser={this.props.updateUser} type='gender'/>
            </div>
        )
    }
}

export default connect(null, mDTP)(About);