import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateFilter } from '../../actions/filter_actions';
import PostItem from '../posts/post_item';
import { clearPosts } from '../../actions/post_actions';
// import { getUsers } from '../../actions/user_actions';
import { getPostsByWall } from '../../reducers/selectors/post_selectors'

const mSTP = (state, ownProps) => {
    let wallId = ownProps.match.params.userId
    return {
        currentUser: state.entities.users[state.session.currentUser],
        wallUser: state.entities.users[wallId],
        posts: getPostsByWall(state.entities.posts, wallId),
        // users: state.entities.users
    }
}

const mDTP = (dispatch, ownProps) => {
    return {
        updateFilter: (id) => dispatch(updateFilter('wallId', id)),
        clearPosts: () => dispatch(clearPosts()),
        // getUsers: (idArr) => dispatch(getUsers(idArr))
    }
}


class Wall extends React.Component{
    constructor(props){
        super(props);
    }
    
    //NEED TO ADD LOGIC SO THAT NOT FETCHING ALL USERS EVERYTIME
    componentDidMount(){
        this.props.updateFilter(this.props.wallUser.id)
            // .then(this.props.getUsers(this.mapAuthorIds()));
    }

    componentDidUpdate(prevProps){
        if(this.props.wallUser.id !== prevProps.wallUser.id){
            this.props.updateFilter(this.props.wallUser.id)
                // .then(this.props.getUsers(this.mapAuthorIds()));
        }
    }

    componentWillUnmount(){
        // this.props.clearPosts();
    }


    render(){
        const postArr = this.props.posts.length ? this.props.posts.reverse().map(post => {
            return <PostItem post={post} key={post.id}/>
        }) : [];
        return (
            <div className="wall-container">
                <div className="wall-header">
                    Posts
                </div>
                <ul className="post-list">
                    {this.props.notFriends ? [] : postArr}
                </ul>
            </div>
        )
    }
}

export default withRouter(connect(mSTP, mDTP)(Wall))