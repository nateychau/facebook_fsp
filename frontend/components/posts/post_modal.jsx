import React from 'react';
import { publishPost, editPost } from '../../actions/post_actions';
import { closeModal } from '../../actions/modal_actions'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUser } from '../../actions/user_actions';

const mSTP = (state, ownProps) => {
    return {
        modal: state.ui.modal,
        errors: state.errors,
        currentUser: state.entities.users[state.session.currentUser],
        wallUser: ownProps.match.params.userId ? state.entities.users[ownProps.match.params.userId] : state.entities.users[state.session.currentUser]
    }
}

const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        getUser: (id) => dispatch(getUser(id)),
        publishPost: (post) => dispatch(publishPost(post)), 
        editPost: (post) => dispatch(editPost(post))
    }
}

class PostModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            body: "",
            imageUrl: "",
            imageFile: null
        }
        this.handleUpload = this.handleUpload.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePostSubmit = this.handlePostSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
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
        // e.preventDefault();
        // let post;
        // if(this.props.modal === 'post'){
        //     post = {
        //         body: this.state.body, 
        //         author_id: this.props.currentUser.id, 
        //         wall_id: this.props.wallUser.id
        //     };
        //     this.props.publishPost(post).then(this.handlePostSubmit);
        // }
        // else if(Array.isArray(this.props.modal)){
        //     post = {
        //         id: this.props.modal[1],
        //         body: this.state.body,
        //         author_id: this.props.currentUser.id,
        //         wall_id: this.props.wallUser.id
        //     }
        //     this.props.editPost(post).then(this.handlePostSubmit);
        // }
        e.preventDefault();
        const formData = new FormData();
        if(this.props.modal === 'post'){
            formData.append('post[body]', this.state.body);
            formData.append('post[author_id', this.props.currentUser.id);
            formData.append('post[wall_id]', this.props.wallUser.id)
            if (this.state.imageFile){
                formData.append('post[photo]', this.state.imageFile);
            }
            this.props.publishPost(formData).then(this.handlePostSubmit);
        }
        else if (Array.isArray(this.props.modal)){
            formData.append('post[id]', this.props.modal[1]);
            formData.append('post[body]', this.state.body);
            formData.append('post[author_id]', this.props.currentUser.id);
            formData.append('post[wall_id]', this.props.wallUser.id)
            if (this.state.imageFile){
                formData.append('post[photo]', this.state.imageFile);
            }
            this.props.editPost(formData).then(this.handlePostSubmit);
        }
    }

    componentDidUpdate(prevProps){
        // console.log('component updated')
        // console.log(this.props)
        if(this.props.match.params.userId !== prevProps.match.params.userId){
            this.handlePostSubmit();
        }
        if(this.props.modal !== prevProps.modal && Array.isArray(this.props.modal)){
            this.setState({body: this.props.modal[2], imageUrl: this.props.modal[3]});
        }
    }

    componentWillUnmount(){
        this.handlePostSubmit();
    }

    handlePostSubmit(){
        document.body.classList.remove('modal-open')
        this.props.closeModal();
        this.setState({
            body: "",
            imageUrl: "",
            imageFile: null
        });
    }


    handleInput(e){
        this.setState({body: e.target.value});
    }

    render(){
        if (this.props.modal !== 'post' && !Array.isArray(this.props.modal)){
            return null;
        }
        let placeholder;

        if(this.props.wallUser){
            if(this.props.wallUser.id === this.props.currentUser.id){
                placeholder = "What's on your mind?";
            }else{
                placeholder = `Write something to ${this.props.wallUser.first_name}`;
            }
        }else{
            placeholder = `What's on your mind, ${this.props.currentUser.first_name}?`
        }
        return (
            <div className="modal-background" onClick={() => {this.props.closeModal(); document.body.classList.remove('modal-open');}}>
                <div id="profile-pic-modal-container" className="modal-child" onClick={e => e.stopPropagation()}>
                    <div className="post-modal">
                        <div className="x post-x" onClick={() => {this.props.closeModal(); document.body.classList.remove('modal-open');}}>&#10006;</div>
                        <h2>Create Post</h2>
                        <div className='post-meta'>
                            <div id="post-modal-pic" className="prof-pic-thumb-small">
                                <img src={this.props.currentUser.profile_photo}></img>
                            </div>
                            <div className="author-bar">{`${this.props.currentUser.first_name} ${this.props.currentUser.last_name}`}</div>
                        </div>
                        <form>
                            <textarea placeholder={placeholder} value={this.state.body} onChange={this.handleInput}></textarea>
                        </form>
                        {this.state.imageUrl ? <div className="post-image"><img src={this.state.imageUrl}></img></div> 
                        : <></>}
                        <label id="post-upload" className="upload-btn">
                            + Upload Photo
                            <input onChange={this.handleUpload} type="file" accept=".png, .jpg, .jpeg"></input>
                        </label>
                        <button disabled={this.state.body.length ? false: true} onClick={this.handleSubmit}>Post</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(connect(mSTP, mDTP)(PostModal));