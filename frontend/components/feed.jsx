import React from 'react'
import { connect } from 'react-redux';
import { getCurrentUser, fetchUser } from '../actions/user_actions';
import { getFriends } from '../reducers/selectors/friendship_selectors';
import { getCurrentUserFeed } from '../actions/post_actions';
import { getPostsByAuthorIdArray } from '../reducers/selectors/post_selectors';
import PostItem from './posts/post_item';
import PostButton from './posts/post_button';

const mSTP = (state, ownProps) => {
    let myFriends = getFriends(state.session.currentUser, state.entities.friendships)
    // myFriends = myFriends.push(state.session.currentUser);
    return ({
        user: state.entities.users[state.session.currentUser],
        isFetching: state.ui.isFetching,
        // myFriends: getFriends(state.session.currentUser, state.entities.friendships),
        posts: getPostsByAuthorIdArray(state.entities.posts, myFriends, state.session.currentUser)
    })
}

const mDTP = (dispatch) => {
    return ({
        // getCurrentUser: () => dispatch(getCurrentUser()),
        getCurrentUserFeed: () => dispatch(getCurrentUserFeed())
    })
}

class Feed extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        // this.props.getCurrentUser().then
        this.props.getCurrentUserFeed();
    }

    render(){
        if(!this.props.user || this.props.isFetching){
            return null
        }
        const postArr = this.props.posts.length ? this.props.posts.reverse().map(post => {
            return <PostItem post={post} key={post.id}/>
        }) : [];
        return (
            <div className="feed-container">
                <div className="post-button-container">
                    <div className="prof-pic-thumb-small">
                        <img src={this.props.user.profile_photo}></img>
                    </div>
                    <PostButton wallUser={this.props.user}/>
                </div>
                <ul className="post-list">
                    {postArr}
                </ul>
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(Feed)