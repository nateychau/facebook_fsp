import { connect } from 'react-redux';
import React from 'react';
import Header from './header';
import { Redirect } from 'react-router-dom'
import { getUser } from '../../actions/user_actions';
import { clearErrors } from '../../actions/session/session_actions'
import About from './about';
import Friends from './friends';
import Photos from './photos';
import Timeline from './timeline';
// import MainProfile from './main_profile';

const mSTP = (state, ownProps) => {
    return ({
        user: state.entities.users[ownProps.match.params.userId],
        errors: state.errors.general
    })
}

const mDTP = (dispatch, ownProps) => {
    return ({
        getUser: (id) => dispatch(getUser(id)),
        clearErrors: () => dispatch(clearErrors())
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
            let renderedPage;
            if(this.state.page === 'timeline'){
                renderedPage = <Timeline user={this.props.user} />
            }
            else if(this.state.page === 'about'){
                renderedPage = <About user={this.props.user} /> 
            } else if(this.state.page === 'friends'){
                renderedPage = <Friends user={this.props.user} />
            }else if(this.state.page === 'photos'){
                renderedPage = <Photos user={this.props.user} />
            }

            if(this.props.errors.length){
                return <Redirect to="/" />
            }
            if(!this.props.user){
                return null
            } else {
                return (
                    <div className='profile-page'>
                        <Header />
                        <div className="profile-nav-container">
                            <div className="profile-nav-bar">
                                <div className="profile-nav-links">
                                    <div className={this.state.page === 'timeline' ? 'active-profile-page' : ''}onClick={this.handlePageToRender('timeline')}><p>Timeline</p></div>
                                    <div className={this.state.page === 'about' ? 'active-profile-page' : ''}onClick={this.handlePageToRender('about')}><p>About</p></div>
                                    <div className={this.state.page === 'friends' ? 'active-profile-page' : ''}onClick={this.handlePageToRender('friends')}><p>Friends</p></div>
                                    <div className={this.state.page === 'photos' ? 'active-profile-page' : ''}onClick={this.handlePageToRender('photos')}><p>Photos</p></div>
                                </div>
                                <button className="profile-nav-button">Edit Profile</button>
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