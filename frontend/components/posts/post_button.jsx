import React from 'react';
import { publishPost } from '../../actions/post_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

const mSTP =  (state, ownProps) => {
    return ({
        currentUser: state.entities.users[state.session.currentUser],
        wallUser: state.entities.users[ownProps.match.params.userId]
    })
}

const mDTP = (dispatch) => {
    return ({
        openModal: () => dispatch(openModal('post'))
    })    
}

const PostButton = (props) => {
    let buttonText;
    if(props.wallUser){
        if(props.wallUser.id === props.currentUser.id){
            buttonText = "What's on your mind?";
        }else{
            buttonText = `Write something to ${props.wallUser.first_name}`;
        }
    }else{
        buttonText = `What's on your mind, ${props.currentUser.first_name}?`
    }
    return (
        <div className='btn post' onClick={props.openModal}>{buttonText}</div>
    )
}



export default withRouter(connect(mSTP, mDTP)(PostButton));