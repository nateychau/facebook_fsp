import React from 'react'
import FriendIndexItem from './friend_index_item';
import { connect } from 'react-redux'
import { getFriendships, getFriends } from '../../reducers/selectors/friendship_selectors';

const mSTP = (state, ownProps) => {
    return {
        friendsList: getFriends(ownProps.user.id, state.entities.friendships)
    }
}

class Friends extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        let friendArr = [];
        if (this.props.friendsList.length){
            for(let i = 0; i<10; i++){
                let id = this.props.friendsList[i];
                if(id){
                    let component = <FriendIndexItem key={id} friendId={id} full={this.props.full}/>
                    friendArr.push(component);
                }
            }
        }
        return (
            <div className= {this.props.full ? 'profile-friends full' : ''}>
                <div>Friends</div>
                <ul className='friend-display'>
                    {friendArr}
                </ul>
            </div>
        )
    }
}


export default connect(mSTP)(Friends)