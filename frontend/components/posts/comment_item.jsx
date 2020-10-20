import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mSTP = (state, ownProps) => {
    return ({
        author: state.entities.users[ownProps.comment.author_id],
        currentUser: state.entities.users[state.session.currentUser]
    })
}


class CommentItem extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        let timestamp = new Date(this.props.comment.created_at).toDateString()
        return (
            <li className="comment-item">
                <div className="prof-pic-thumb-comment">
                    <img src={this.props.author.profile_photo}></img>
                </div>
                <div className="comment-item-main">
                    <div className="comment-item-detail">
                        <Link to={`/users/${this.props.author.id}`}><div>{`${this.props.author.first_name} ${this.props.author.last_name}`}</div></Link>
                        <div className="comment-item-body">{this.props.comment.body}</div>
                    </div>
                    <div className='comment-time'>{timestamp}</div>
                </div>
            </li>
        )
    }
}

export default connect(mSTP)(CommentItem);