import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import { updateUserPhoto, getUser, updateUser } from '../../actions/user_actions';
import EditBio from './edit_bio';

const mDTP = (dispatch) => ({
    openModal: () => dispatch(openModal('profilePic'))
})


class ProfileThumb extends React.Component{
    constructor(props){
        super(props);
        this.handleOpenModal = this.handleOpenModal.bind(this);
    }

    handleOpenModal(){
        this.props.openModal();
        document.body.classList.add('modal-open');
    }
    
    render(){
        return(
            <div className="profile-thumb-container">
                <div className="prof-pic">
                    <img src={this.props.user.profile_photo}></img>
                    {this.props.user.id === this.props.currentUser.id ? 
                    <button onClick={this.handleOpenModal} className="prof-pic-btn"><i className="fas fa-camera"></i></button>
                    : <></>}
                </div>
                <h2>{`${this.props.user.first_name} ${this.props.user.last_name}`}</h2>
                <span>{this.props.user.bio}</span>
                {this.props.user.id === this.props.currentUser.id ? 
                <EditBio user={this.props.user}/>
                : <></>}
            </div>
        )
    }


}


export default withRouter(connect(null, mDTP)(ProfileThumb));