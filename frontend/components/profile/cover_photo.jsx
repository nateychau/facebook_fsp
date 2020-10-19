import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

const mDTP = (dispatch) => ({
    openModal: () => dispatch(openModal('coverPic'))
})


class CoverPhoto extends React.Component{
    constructor(props){
        super(props);
        this.handleOpenModal = this.handleOpenModal.bind(this);
    }

    handleOpenModal(){
        this.props.openModal();
        document.body.classList.add('modal-open');
    }

    render(){
        const coverPhoto = this.props.user.cover_photo? <img src={this.props.user.cover_photo}></img> : <div className="cover-photo-placeholder"></div>
        return (
            <div>
                <div className="cover-photo-container">
                    {coverPhoto}
                </div>
                {this.props.user.id === this.props.currentUser.id ? 
                <button onClick={this.handleOpenModal} className="cover-pic-btn"><i className="fas fa-camera"></i>Edit Cover Photo</button>
                : <></>}
            </div>
        )
    }
}

export default connect(null, mDTP)(CoverPhoto);