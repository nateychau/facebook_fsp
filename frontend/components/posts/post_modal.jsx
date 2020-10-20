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
        wallUser: state.entities.users[ownProps.match.params.userId]
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
            body: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePostSubmit = this.handlePostSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }


    handleSubmit(e){
        e.preventDefault();
        let post;
        if(this.props.modal === 'post'){
            post = {
                body: this.state.body, 
                author_id: this.props.currentUser.id, 
                wall_id: this.props.wallUser.id
            };
            this.props.publishPost(post).then(this.handlePostSubmit);
        }
        else if(Array.isArray(this.props.modal)){
            post = {
                id: this.props.modal[1],
                body: this.state.body,
                author_id: this.props.currentUser.id,
                wall_id: this.props.wallUser.id
            }
            this.props.editPost(post).then(this.handlePostSubmit);
        }
    }

    componentDidUpdate(prevProps){
        // console.log('component updated')
        // console.log(this.props)
        if(this.props.match.params.userId !== prevProps.match.params.userId){
            this.handlePostSubmit();
        }
        if(this.props.modal !== prevProps.modal && Array.isArray(this.props.modal)){
            this.setState({body: this.props.modal[2]});
        }
    }

    handlePostSubmit(){
        this.props.closeModal();
        this.setState({
            body: ""
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
            <div className="modal-background" onClick={this.props.closeModal}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    <div className="post-modal">
                        <div className="x post-x" onClick={this.props.closeModal}>&#10006;</div>
                        <h2>Create Post</h2>
                        <div className="author-bar">{`${this.props.currentUser.first_name} ${this.props.currentUser.last_name}`}</div>
                        <form>
                            <textarea placeholder={placeholder} value={this.state.body} onChange={this.handleInput}></textarea>
                        </form>
                        <button disabled={this.state.body.length ? false: true} onClick={this.handleSubmit}>Post</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(connect(mSTP, mDTP)(PostModal));