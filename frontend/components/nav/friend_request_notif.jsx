import React from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../actions/user_actions';

const mSTP = (state, ownProps) => {
    return {
        requester: state.entities.users[ownProps.request.requester_id],
    }
}

const mDTP = (dispatch, ownProps) => {
    return {
        getRequester: () => dispatch(getUser(ownProps.request.requester_id))
    }
}


class FriendRequestNotif extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getRequester();
    }

    render(){
        if(!this.props.requester){
            return null;
        }
        return (
            <li>
                <div>
                    {`${this.props.requester.first_name} ${this.props.requester.last_name} has sent you a friend request`}
                </div>
            </li>
        )
    }
}

export default connect(mSTP, mDTP)(FriendRequestNotif);