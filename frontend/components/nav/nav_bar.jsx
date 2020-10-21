import React from 'react';
import { Link } from 'react-router-dom';
import Notifications from './notifications';
import { connect } from 'react-redux';
import { logout } from '../../actions/session/session_actions';
import { getIncomingFriendRequests } from '../../reducers/selectors/friend_request_selectors';

const mapStateToProps = (state) => {
    return ({
        currentUser: state.entities.users[state.session.currentUser],
        friendRequests: getIncomingFriendRequests(state.entities.friendRequests, state.session.currentUser)
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        logout: () => dispatch(logout())
    })
}


class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state={
            messages: false,
            notif: false,
            logout: false,
            read: false,
            notifCount: this.props.friendRequests.length
        }
        this.handleLogout = this.handleLogout.bind(this);
        this.handleOpenDropdown = this.handleOpenDropdown.bind(this);
        this.handleCloseDropwdown = this.handleCloseDropdown.bind(this);
    }

    componentDidUpdate(prevProps){
        if(this.props.friendRequests.length > prevProps.friendRequests.length){
            this.setState({read: false, notifCount: this.props.friendRequests.length - prevProps.friendRequests.length});
        }
    }
    
    handleLogout(){
        console.log('event fired')
        this.props.logout();
    }
    
    handleOpenDropdown(type){
        return (e) => {
            this.setState({[type]: true}, ()=>{
                if (type === 'notif'){
                    this.setState({read: true, notifCount: 0})
                }
            })
        }
    }

    
    handleCloseDropdown(type){
        return (e) => {
            this.setState({[type]: false})
        }
    }
    
    render(){
        return (
            <div className="nav-container">
                <div className="nav-left">
                    <Link to="/"><button className="btn">Logo</button></Link>
                </div>
                <div className="nav-center">
                    <a href="https://github.com/nateychau" target="_blank"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/nathan-chau-363130180/" target="_blank"><i className="fab fa-linkedin"></i></a>
                    <a href="https://nateychau.github.io/" target="_blank"><i className="fas fa-address-card"></i></a>
                </div>
                <div className="nav-right">
                    <Link to={`/users/${this.props.currentUser.id}`}>
                        <button id={this.props.location.pathname === `/users/${this.props.currentUser.id}` ? 'active-nav-button' : ''} className="btn-profile">
                            <div className="prof-pic-thumb-smallest">
                                <img src={this.props.currentUser.profile_photo}></img>
                            </div>
                            {this.props.currentUser.first_name}
                        </button>
                    </Link>
                    <button id={this.state.messages ? 'active-nav-button' : ''} onClick={this.handleOpenDropdown("messages")} onBlur={this.handleCloseDropwdown("messages")} className="util-btn"><div className="messages"></div></button>
                    {this.state.messages ? <div className="util-container">
                        <div>Messenger</div>
                        <div>You have no new messages</div>
                    </div> : <></>}
                    <button id={this.state.notif ? 'active-nav-button' : ''} onClick={this.handleOpenDropdown("notif")} onBlur={this.handleCloseDropwdown("notif")} className="util-btn"><div className="notifications"></div></button>
                    {this.state.notifCount ? <div className='notif-count'>{this.state.notifCount}</div> : <></>}
                    {this.state.notif ? <Notifications requests={this.props.friendRequests} /> : <></>}
                    <button id={this.state.logout ? 'active-nav-button' : ''} onClick={this.handleOpenDropdown("logout")} onBlur={this.handleCloseDropwdown("logout")} className="util-btn"><div className="dropdown"></div></button>
                    {this.state.logout ? <div className="util-container">
                        <button onMouseDown={this.handleLogout} className="logout-btn"><div className="icon-container"><div className="logout-icon"></div></div><div>Log out</div></button>
                    </div> : <></>}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);