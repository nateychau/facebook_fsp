import React from 'react'
import { connect } from 'react-redux';
import { getUser } from '../../actions/user_actions';
import { Link } from 'react-router-dom';

const mSTP = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.friendId]
    }
}

const mDTP = (dispatch, ownProps) => {
    return {
        getUser: () => dispatch(getUser(ownProps.friendId))
    }
}

class FriendIndexItem extends React.Component{
    constructor(props){
        super(props)
    }
    
    componentDidMount(){
        if(!this.props.user){
            this.props.getUser();
        }
    }

    render(){
        if(!this.props.user){
            return null
        }

        return (
            <li className={this.props.full ? 'friend-index-item-full' : 'friend-index-item'}>
                <Link to={`/users/${this.props.user.id}`}>
                    <div className="prof-pic-thumb-preview">
                        <img src={this.props.user.profile_photo}></img>
                    </div>
                    <div className="friend-name">{`${this.props.user.first_name} ${this.props.user.last_name}`}</div>
                </Link>
            </li>
        )
    }
}

export default connect(mSTP, mDTP)(FriendIndexItem);