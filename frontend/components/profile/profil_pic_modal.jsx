import React from 'react';
import { getUser, updateUser } from '../../actions/user_actions';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux'

const mSTP = (state, ownProps) => {
    return {
        modal: state.ui.modal, 
        errors: state.errors,
        currentUser: state.entities.users[state.session.currentUser]
    }
}

const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        getUser: (id) => dispatch(getUser(id)),
        processForm: (user) => dispatch(updateUser(user))
    }
}


class PhotoModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imageUrl: "",
            imageFile: null
        }
        this.handleUpload = this.handleUpload.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
    }


    handleUpload(e){
        e.preventDefault();
        const reader = new FileReader();
        const file = e.currentTarget.files[0]
        reader.onloadend = () => {
            this.setState({imageUrl: reader.result, imageFile: file});
        }
        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ imageUrl: "", imageFile: null});
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('user[id]', this.props.currentUser.id);
        if (this.state.imageFile){
            let type = this.props.modal === 'profilePic' ? 'user[profile_photo]' : 'user[cover_photo]'
            formData.append([type], this.state.imageFile);
        }
        for(let p of formData){
            console.log(p);
        }
        this.props.processForm(formData).then(this.setState({imageUrl: "", imageFile: null}));
        document.body.classList.remove('modal-open')
        this.props.closeModal();
    }

    handleModalClose(){
        this.setState({
            type: '',
            imageUrl: "",
            imageFile: null
        })
        document.body.classList.remove('modal-open')
        this.props.closeModal();
    }

    render(){
        if(this.props.modal !== "profilePic" && this.props.modal !== "coverPic"){
            return null;
        }
        const header = this.props.modal === 'profilePic' ? <h2>Update Profile Picture</h2> : <h2>Update Cover Photo</h2>
        return (
            <div className="modal-background" onClick={this.handleModalClose}>
                <div id="profile-pic-modal-container" className="modal-child" onClick={e => e.stopPropagation()}>
                    <div id="profile-pic-modal" className="post-modal">
                        <div className="x post-x" onClick={this.handleModalClose}>&#10006;</div>
                        {header}
                        <form className='upload-form'>
                            <label className="upload-btn">
                                + Upload Photo
                                <input onChange={this.handleUpload} type="file"></input>
                            </label>
                        </form>
                        {this.state.imageUrl ? <div className="image-preview"><img src={this.state.imageUrl}></img></div> : <></>}
                        
                        <button onClick={this.handleSubmit} disabled={this.state.imageUrl && this.state.imageFile ? false : true} className="save-btn">Save</button>
                    </div>
                </div>
            </div>
        )
    }


}



export default connect(mSTP, mDTP)(PhotoModal);