import React from 'react';
import { connect } from 'react-redux'
import { createFriendship, deleteFriendshipWithState } from '../../actions/friendship_actions';
import { deleteFriendRequestWithState } from '../../actions/friend_request_actions';

const mDTP = (dispatch, ownProps) => {
    return {
        accept: (friendship) => dispatch(createFriendship(friendship)),
        delete: (requesterId, requestedId) => dispatch(deleteFriendRequestWithState(requesterId, requestedId)),
        unfriend: (user_id, friend_id) => dispatch(deleteFriendshipWithState(user_id, friend_id))
    }
}


class RespondButton extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            dropdown: false
        }
        this.handleOpenDropdown = this.handleOpenDropdown.bind(this);
        this.handleAccept = this.handleAccept.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleCloseDropdown = this.handleCloseDropdown.bind(this);
        this.handleUnfriend = this.handleUnfriend.bind(this);
    }

    handleOpenDropdown(){
        this.setState({dropdown: true});
    }

    handleCloseDropdown(){
        this.setState({dropdown: false});
    }

    handleAccept(){
        let friendship = {
            user_id: this.props.currentUserId,
            friend_id: this.props.wallUserId
        }
        this.props.accept(friendship)
            .then(this.setState({dropwdown: false}));
    }

    handleDelete(){
        this.props.delete(this.props.wallUserId, this.props.currentUserId)
            .then(this.setState({dropdown: false}));
    }

    handleUnfriend(){
        this.props.unfriend(this.props.currentUserId, this.props.wallUserId)
            .then(this.setState({dropdown: false}))
    }

    render(){
        let dropdown;
        if(this.state.dropdown && this.props.type === 'respond'){
            dropdown = <div id="more-open-post" className="more-open">
                <button className="more-btn" onMouseDown={this.handleAccept}>
                    <div>Confirm</div>
                </button>
                <button className="more-btn" onMouseDown={this.handleDelete}>
                    <div>Delete Request</div>
                </button>
            </div>
        } else if (this.state.dropdown && this.props.type === 'friends'){
            dropdown = <div id="more-open-post" className="more-open">
                <button className="more-btn" onMouseDown={this.handleUnfriend}>
                    <div>Unfriend</div>
                </button>
            </div>
        } else {
            dropdown = <></>
        }
        return (
            <div className="relative">
            <button  id={this.props.type === 'respond' ? "respond-btn" : ''} className="profile-nav-button" onClick={this.handleOpenDropdown} onBlur={this.handleCloseDropdown}>
                <div className='friended-fill-icon'></div>
                    {this.props.text}
            </button>
            {dropdown}
            </div>
        )
    }

}

export default connect(null, mDTP)(RespondButton)