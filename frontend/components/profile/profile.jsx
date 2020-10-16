import { connect } from 'react-redux';
import React from 'react';
import Header from './header';
import { Redirect } from 'react-router-dom'
import Wall from './wall';
import PostModal from '../posts/post_modal';
import PostButton from '../posts/post_button';
import { getUser } from '../../actions/user_actions';
import { clearErrors } from '../../actions/session/session_actions'
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
        }

        componentDidMount(){
            this.props.getUser(this.props.match.params.userId)
        }

        componentDidUpdate(prevProps){
            if(this.props.match.params.userId !== prevProps.match.params.userId){
                this.props.getUser(this.props.match.params.userId)
            }
        }

        componentWillUnmount(){
            this.props.clearErrors();
        }

        render(){
            if(this.props.errors.length){
                return <Redirect to="/" />
            }
            if(!this.props.user){
                return null
            } else {
                return (
                        <div className='profile-page'>
                        <PostModal />
                        <Header />
                        <div className="profile-main">
                            <div className="profile-sticky">
                                <h2>Intro</h2>
                                <h4>{this.props.user.bio}</h4>
                            </div>
                            <div className="profile-scroll">

                                <PostButton />
                                <Wall />
                            </div>
                        </div>
                    </div>
                )
            }
        }
}





export default connect(mSTP, mDTP)(Profile);