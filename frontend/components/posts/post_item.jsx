import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getCommentsByPost } from '../../reducers/selectors/comment_selectors';
import CommentItem from './comment_item';
import { publishComment } from '../../actions/comment_actions';
import { deletePost } from '../../actions/post_actions';
import { openModal } from '../../actions/modal_actions';
import { getUser } from '../../actions/user_actions';
import LikeButton from './like_button';

const mSTP = (state, ownProps) => {
    let wallId = ownProps.post.wall_id//ownProps.match.params.userId
    return({
        currentUser: state.entities.users[state.session.currentUser],
        wallUser: state.entities.users[wallId],
        comments: getCommentsByPost(state.entities.comments, ownProps.post.id),
        author: state.entities.users[ownProps.post.author_id]
    })
}

const mDTP = (dispatch, ownProps) => {
    return ({
        publishComment: (comment) => dispatch(publishComment(comment)),
        deletePost: () => dispatch(deletePost(ownProps.post.id)),
        openModal: () => dispatch(openModal(['edit', ownProps.post.id, ownProps.post.body])),
        getAuthor: () => dispatch(getUser(ownProps.post.author_id)),
        getUser: (id) => dispatch(getUser(id)),
    })
}

class PostItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            body: '',
            more: false
        }
        this.commentField = React.createRef();
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleMoreOpen = this.handleMoreOpen.bind(this);
        this.handleMoreClose = this.handleMoreClose.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.focusComment = this.focusComment.bind(this);
    }

    componentDidMount(){
        if(!this.props.author){
            this.props.getAuthor();
        }
        if(!this.props.wallUser){
            this.props.getUser(this.props.post.wall_id);
        }
    }

    handleInput(e){
        this.setState({body: e.target.value});
    }

    handleSubmit(e){
        if(e.key === 'Enter'){
            this.props.publishComment({
                body: this.state.body,
                author_id: this.props.currentUser.id,
                post_id: this.props.post.id
            })
                .then(this.setState({
                    body: '', 
                    more: false
                }));
        }
    }

    handleDelete(){
        this.props.deletePost();
    }

    handleEdit(){
        this.props.openModal();
    }

    componentWillUnmount(){
        this.setState({body: '', more: false});
    }

    handleMoreOpen(){
        this.setState({more: true});
    }

    handleMoreClose(){
        this.setState({more: false});
    }

    focusComment(){
        this.commentField.current.focus();
    }

    render(){
        if(!this.props.author || !this.props.wallUser){
            return null
        }
        let timestamp = new Date(this.props.post.created_at).toDateString()
        let commentArr = this.props.comments ?
            this.props.comments.map(comment => {
                return <CommentItem key={comment.id} comment={comment} wallUser={this.props.wallUser}/>
            })
        : []
        return (
            <li className="post-item">
                <div className='post-item-header'>
                    <div>
                        <div className="prof-pic-thumb-small">
                            <img src={this.props.author.profile_photo}></img>
                        </div>
                        <div className="post-item-meta">
                            <div>
                                <Link to={`/users/${this.props.author.id}`}><div>{`${this.props.author.first_name} ${this.props.author.last_name}`}</div></Link>
                                {this.props.author.id === this.props.wallUser.id ? <></> : <> 
                                <div className="arrow-right-icon"></div>
                                <Link to={`/users/${this.props.wallUser.id}`}><div>{`${this.props.wallUser.first_name} ${this.props.wallUser.last_name}`}</div></Link>
                                </>}
                                </div>
                            <div>{timestamp}</div>
                        </div>
                    </div>
                    {this.props.currentUser.id === this.props.author.id || this.props.currentUser.id === this.props.wallUser.id ? 
                    <button className="more-container" onClick={this.handleMoreOpen} onBlur={this.handleMoreClose}>
                        <i className="fas fa-ellipsis-h"></i>
                    </button>
                    : <div></div>}
                    {this.state.more ? 
                    <div id="more-open-post" className="more-open">
                        {this.props.author.id === this.props.currentUser.id ? 
                        <button className="more-btn" onMouseDown={this.handleEdit}>
                            <div className="icon-container">
                                <i className="far fa-edit"></i>
                            </div>
                            <div>Edit post</div>
                        </button>
                        : <></>}
                        <button className="more-btn" onMouseDown={this.handleDelete}>
                            <div className="icon-container">
                                <i className="far fa-trash-alt"></i>
                            </div>
                            <div>Delete post</div>
                        </button>
                    </div> : <></>}
                </div>
                <div className="post-item-body">{this.props.post.body}</div>
                <div className="reaction-bar">
                    {/* add like display here */}
                </div>
                <div className="option-bar">
                    <LikeButton likeable_id={this.props.post.id} likeable_type={'Post'} user_id={this.props.currentUser.id} />
                    <button className='option-btn' onClick={this.focusComment}>
                        <i className="far fa-comment-alt"></i>
                        <div>Comment</div>
                    </button>
                </div>
                <ul className="comment-list">
                    {commentArr}
                </ul>
                <div className="new-comment-container">
                    <div className="prof-pic-thumb-comment">
                        <img src={this.props.currentUser.profile_photo}></img>
                    </div>
                    <input ref={this.commentField} type='text' value={this.state.body} placeholder="Write a comment..." onChange={this.handleInput} onKeyDown={this.handleSubmit}></input>
                </div>
            </li>
        )
    }
}

export default withRouter(connect(mSTP, mDTP)(PostItem));