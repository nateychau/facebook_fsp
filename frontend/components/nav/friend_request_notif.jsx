import React from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../actions/user_actions';
import { findRequestId } from '../../reducers/selectors/friend_request_selectors';
import { deleteFriendRequest } from '../../actions/friend_request_actions';
import { createFriendship } from '../../actions/friendship_actions';
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
    return {
        requester: state.entities.users[ownProps.requesterId],
        requestId: findRequestId(state.entities.friendRequests, ownProps.requesterId, state.session.currentUser),
        currentUser: state.entities.users[state.session.currentUser]
    }
}

const mDTP = (dispatch, ownProps) => {
    return {
        getRequester: () => dispatch(getUser(ownProps.requesterId)),
        delete: (id) => dispatch(deleteFriendRequest(id)),
        accept: (friendship) => dispatch(createFriendship(friendship))
    }
}


class FriendRequestNotif extends React.Component{
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAccept = this.handleAccept.bind(this);
        this.handleRedirect = this.handleRedirect.bind(this);
    }

    componentDidMount(){
        this.props.getRequester();
    }

    handleDelete(e){
        e.stopPropagation();
        this.props.delete(this.props.requestId);
    }

    handleAccept(e){
        e.stopPropagation();
        let friendship = {user_id: this.props.currentUser.id, friend_id: this.props.requesterId};
        this.props.accept(friendship);
    }

    handleRedirect(){
        this.props.history.push(`users/${this.props.requesterId}`)
        // <Redirect to={`users/${this.props.requesterId}`}/>
    }

    render(){
        if(!this.props.requester){
            return null;
        }
        return (
            <li className='notification-row'>
                <div className='notif-container' onMouseDown={this.handleRedirect}>
                    <div className='notif-pic'>
                        <div className="prof-pic-request">
                            <img src={this.props.requester.profile_photo}></img>
                        </div>
                        <div className='stretch'></div>
                    </div>
                    <div className='notif-meta'>
                        <span>{`${this.props.requester.first_name} ${this.props.requester.last_name} sent you a friend request`}</span>
                        <div className='about-text-buttons'>
                            <button className='submit-btn' onMouseDown={this.handleAccept}>Confirm</button>
                            <button className='cancel-btn' onMouseDown={this.handleDelete}>Delete</button>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}

export default withRouter(connect(mSTP, mDTP)(FriendRequestNotif));

