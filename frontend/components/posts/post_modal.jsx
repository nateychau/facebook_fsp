import React from 'react';
import { publishPost } from '../../actions/post_actions';
import { closeModal } from '../../actions/modal_actions'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

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
        processForm: (post) => dispatch(publishPost(post)), 
    }
}

class PostModal extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            author_id: this.props.currentUser.id,
            wall_id: this.props.wallUser.id,
            body: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        let post = Object.assign({}, this.state);
        this.props.processForm(post).then(this.handleModalClose);
    }

    handleModalClose(){
        this.props.closeModal();
        this.setState({
            author_id: this.props.currentUser.id,
            wall_id: this.props.wallUser.id,
            body: ""
        });
    }

    handleInput(e){
        this.setState({body: e.target.value});
    }

    render(){
        if (this.props.modal !== 'post'){
            return null;
        }
        return (
            <div className="modal-background" onClick={this.props.closeModal}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    <h2>Create Post</h2>
                    <div className="author-bar">{`${this.props.currentUser.first_name} ${this.props.currentUser.last_name}`}</div>
                    <form>
                        <input type="text" placeholder="What's on your mind?" value={this.state.body} onChange={this.handleInput}></input>
                        <button onClick={this.handleSubmit}>Post</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(connect(mSTP, mDTP)(PostModal));