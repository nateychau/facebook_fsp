import { connect } from 'react-redux';
import React from 'react';
import Header from './header';
import { Redirect } from 'react-router-dom'
import { getUser } from '../../actions/user_actions';
import { clearErrors } from '../../actions/session/session_actions'
import About from './about_page';
import Friends from './friends';
import Photos from './photos';
import Timeline from './timeline';
import { getFriendships, getFriends } from '../../reducers/selectors/friendship_selectors';
import { getOutgoingFriendRequests, getIncomingFriendRequests } from '../../reducers/selectors/friend_request_selectors';
import { SendRequest, CancelRequest } from '../friends/friend_request_button';
import RespondButton from '../friends/respond_button';

const mSTP = (state, ownProps) => {
    return ({
        user: state.entities.users[ownProps.match.params.userId],
        errors: state.errors.general,
        currentUser: state.entities.users[state.session.currentUser],
        friendsList: getFriends(ownProps.match.params.userId, state.entities.friendships),
        myPendingRequests: getOutgoingFriendRequests(state.entities.friendRequests, state.session.currentUser),
        myIncomingRequests: getIncomingFriendRequests(state.entities.friendRequests, state.session.currentUser),
        myFriends: getFriends(state.session.currentUser, state.entities.friendships)
        // friendships: getFriendships(ownProps.match.params.userId, state.entities.friendships)
    })
}

const mDTP = (dispatch, ownProps) => {
    return ({
        getUser: (id) => dispatch(getUser(id)),
        clearErrors: () => dispatch(clearErrors()),
    })
}

class Profile extends React.Component{
        constructor(props){
            super(props)
            this.state = {
                page: 'timeline'
            }
            this.handlePageToRender = this.handlePageToRender.bind(this);
        }

        componentDidMount(){
            this.props.getUser(this.props.match.params.userId)
        }

        componentDidUpdate(prevProps){
            // console.log('component updated')
            // console.log(this.props)
            if(this.props.match.params.userId !== prevProps.match.params.userId){
                this.props.getUser(this.props.match.params.userId)
            }
        }

        handlePageToRender(type){
            return (e) => {
                this.setState({page: type});
            }
        }

        componentWillUnmount(){
            this.props.clearErrors();
        }

        render(){
            if(!this.props.user){
                return null
            }
            let renderedPage;
            if(this.state.page === 'timeline'){
                renderedPage = <Timeline user={this.props.user} currentUser={this.props.currentUser}/>
            }
            else if(this.state.page === 'about'){
                renderedPage = <About user={this.props.user} currentUser={this.props.currentUser}/> 
            } else if(this.state.page === 'friends'){
                renderedPage = <Friends user={this.props.user} full={true}/>
            }else if(this.state.page === 'photos'){
                renderedPage = <Photos user={this.props.user} />
            }
            
            if(this.props.errors.length){
                return <Redirect to="/" />
            }
             else {
                let button;
                if(this.props.currentUser.id === this.props.user.id){
                    button = <button className="profile-nav-button" onClick={this.handlePageToRender('about')}>
                    <div className="edit-icon"></div>
                        Edit Profile
                    </button>
                } 
                else if(this.props.myFriends.includes(this.props.user.id)){
                    button = <RespondButton 
                    currentUserId={this.props.currentUser.id} 
                    wallUserId={this.props.user.id}
                    text={''}
                    type={'friends'}/>
                }
                else if(this.props.myPendingRequests.includes(this.props.user.id)){
                    button = <CancelRequest
                    currentUserId={this.props.currentUser.id} 
                    wallUserId={this.props.user.id} 
                    icon={'cancel-request-icon'} 
                    text={'Cancel Request'}/>
                }
                else if(this.props.myIncomingRequests.includes(this.props.user.id)){
                    button = <RespondButton 
                    currentUserId={this.props.currentUser.id} 
                    wallUserId={this.props.user.id}
                    text={'Respond'}
                    type={'respond'}/>
                }
                else{
                    button = <SendRequest 
                    currentUserId={this.props.currentUser.id} 
                    wallUserId={this.props.user.id}
                    icon={'add-friend-icon'} 
                    text={'Add Friend'}/>
                }
                return (
                    <div className='profile-page'>
                        <Header user={this.props.user} currentUser={this.props.currentUser}/>
                        <div className="profile-nav-container">
                            <div className="profile-nav-bar">
                                <div className="profile-nav-links">
                                    <div className={this.state.page === 'timeline' ? 'active-profile-page' : ''}onClick={this.handlePageToRender('timeline')}><p>Timeline</p></div>
                                    <div className={this.state.page === 'about' ? 'active-profile-page' : ''}onClick={this.handlePageToRender('about')}><p>About</p></div>
                                    <div className={this.state.page === 'friends' ? 'active-profile-page' : ''}onClick={this.handlePageToRender('friends')}><p>Friends</p></div>
                                    <div className={this.state.page === 'photos' ? 'active-profile-page' : ''}onClick={this.handlePageToRender('photos')}><p>Photos</p></div>
                                </div>
                                {button}
                            </div>
                        </div>
                        <div className="profile-main">
                            {renderedPage}
                        </div>
                    </div>
                )
            }
        }
}





export default connect(mSTP, mDTP)(Profile);