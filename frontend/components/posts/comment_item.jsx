import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { editComment, deleteComment } from '../../actions/comment_actions';

const mSTP = (state, ownProps) => {
    return ({
        author: state.entities.users[ownProps.comment.author_id],
        currentUser: state.entities.users[state.session.currentUser]
    })
}

const mDTP = (dispatch, ownProps) => {
    return ({
        editComment: (comment) => dispatch(editComment(comment)),
        deleteComment: () => dispatch(deleteComment(ownProps.comment.id))
    })
}


class CommentItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            edit: false,
            more: false,
            body: this.props.comment.body,
        }
        this.handleMoreOpen = this.handleMoreOpen.bind(this);
        this.handleMoreClose = this.handleMoreClose.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleDelete(){
        this.props.deleteComment();
    }

    handleEdit(){
        this.setState({edit: true, more: false});
    }

    handleSubmit(e){
        if(e.key === 'Enter'){
            this.props.editComment({
                id: this.props.comment.id,
                body: this.state.body,
                author_id: this.props.currentUser.id,
                post_id: this.props.comment.post_id
            }).then(this.setState({edit: false, more: false}))
        }
    }

    handleInput(e){
        this.setState({body: e.target.value});
    }

    handleMoreOpen(){
        this.setState({more: true});
    }

    handleMoreClose(){
        this.setState({more: false});
    }

    handleCancel(){
        this.setState({edit: false});
    }


    render(){
        let timestamp = new Date(this.props.comment.created_at).toDateString()
        return (
            <li className="comment-item">
                <div className="prof-pic-thumb-comment">
                    <img src={this.props.author.profile_photo}></img>
                </div>
                {this.state.edit ? 
                <>
                <input type="text" value={this.state.body} onChange={this.handleInput} onKeyDown={this.handleSubmit}></input>
                <div onClick={this.handleCancel}>Cancel</div>
                </>
                : 
                <div className="comment-item-main">
                    <div className="comment-item-detail">
                        <Link to={`/users/${this.props.author.id}`}><div>{`${this.props.author.first_name} ${this.props.author.last_name}`}</div></Link>
                        <div className="comment-item-body">{this.props.comment.body}</div>
                    </div>
                    <div className='comment-time'>{timestamp}</div>
                </div>
                }
                {this.props.currentUser.id === this.props.comment.author_id || this.props.currentUser.id === this.props.wallUser.id ? 
                    <button className="more-container" onClick={this.handleMoreOpen} onBlur={this.handleMoreClose}>
                        <i className="fas fa-ellipsis-h"></i>
                    </button>
                : <div></div>}
                {this.state.more ? 
                    <div className="more-open">
                        {this.props.author.id === this.props.currentUser.id ? 
                        <button className="more-btn" onMouseDown={this.handleEdit}>
                            <div>Edit</div>
                        </button>
                        : <></>}
                        <button className="more-btn" onMouseDown={this.handleDelete}>
                            <div>Delete</div>
                        </button>
                    </div> : <></>}
            </li>
        )
    }
}

export default connect(mSTP, mDTP)(CommentItem);