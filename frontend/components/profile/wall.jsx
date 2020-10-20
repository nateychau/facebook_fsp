import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateFilter } from '../../actions/filter_actions';
import PostItem from '../posts/post_item';
import { clearPosts } from '../../actions/post_actions';
import { getUsers } from '../../actions/user_actions';
import { getPostsByAuthor, getPostsByWall } from '../../reducers/selectors/post_selectors'

const mSTP = (state, ownProps) => {
    let wallId = ownProps.match.params.userId
    return {
        currentUser: state.entities.users[state.session.currentUser],
        wallUser: state.entities.users[wallId],
        posts: getPostsByWall(state.entities.posts, wallId),
        users: state.entities.users
    }
}

const mDTP = (dispatch, ownProps) => {
    return {
        updateFilter: (id) => dispatch(updateFilter('wallId', id)),
        clearPosts: () => dispatch(clearPosts()),
        getUsers: (idArr) => dispatch(getUsers(idArr))
    }
}


class Wall extends React.Component{
    constructor(props){
        super(props);
        this.mapAuthorIds = this.mapAuthorIds.bind(this);
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
        this.props.clearPosts();
    }

    mapAuthorIds(){
        let authorIdArr = []
        this.props.posts.forEach(post => {
            if(!authorIdArr.includes(post.author_id)){
                authorIdArr.push(post.author_id);
            }
        });
        return authorIdArr;
    }


    render(){
        let authorIdArr = this.mapAuthorIds();
        let allAuthorsFetched = true;
        authorIdArr.forEach(authorId => {
            if (!Object.keys(this.props.users).includes(authorId.toString())){
                allAuthorsFetched = false;
            }
        })
        const postArr = (allAuthorsFetched && authorIdArr.length > 0) ? this.props.posts.reverse().map(post => {
            let author = this.props.users[post.author_id]
            return <PostItem  wallUser={this.props.wallUser} post={post} author={author} key={post.id} currentUser={this.props.currentUser}/>
        }) : [];
        return (
            <div className="wall-container">
                <div className="wall-header">
                    Posts
                </div>
                <ul className="post-list">
                    {postArr}
                </ul>
            </div>
        )
    }
}

export default withRouter(connect(mSTP, mDTP)(Wall))