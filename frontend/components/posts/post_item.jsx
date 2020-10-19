import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { getCommentsByPost } from '../../reducers/selectors/comment_selectors';
import CommentItem from './comment_item';
import { publishComment } from '../../actions/comment_actions';

const mSTP = (state, ownProps) => {
    return({
        comments: getCommentsByPost(state.entities.comments, ownProps.post.id)
    })
}

const mDTP = (dispatch) => {
    return ({
        publishComment: (comment) => dispatch(publishComment(comment))
    })
}

class PostItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            body: '',
            author_id: this.props.currentUser.id,
            post_id: this.props.post.id
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e){
        this.setState({body: e.target.value});
    }

    handleSubmit(e){
        if(e.key === 'Enter'){
            this.props.publishComment(this.state).then(this.setState({body: '', author_id: this.props.currentUser.id, post_id: this.props.post.id}));
        }
    }

    componentWillUnmount(){
        this.setState({body: '', author_id: this.props.currentUser.id, post_id: this.props.post.id});
    }

    render(){
        let timestamp = new Date(this.props.post.created_at).toDateString()
        let commentArr = this.props.comments ?
            this.props.comments.map(comment => {
                return <CommentItem key={comment.id} comment={comment}/>
            })
        : []
        return (
            <li className="post-item">
                <div className='post-item-header'>
                    <div className="prof-pic-thumb-small">
                        <img src={this.props.author.profile_photo}></img>
                    </div>
                    <div className="post-item-meta">
                        <Link to={`/users/${this.props.author.id}`}><div>{`${this.props.author.first_name} ${this.props.author.last_name}`}</div></Link>
                        <div>{timestamp}</div>
                    </div>
                </div>
                <div className="post-item-body">{this.props.post.body}</div>
                <ul className="comment-list">
                    {commentArr}
                </ul>
                <div className="new-comment-container">
                    <div className="prof-pic-thumb-smallest">
                        <img src={this.props.currentUser.profile_photo}></img>
                    </div>
                    <input type='text' value={this.state.body} placeholder="Write a comment..." onChange={this.handleInput} onKeyDown={this.handleSubmit}></input>
                </div>
            </li>
        )
    }
}

export default connect(mSTP, mDTP)(PostItem);