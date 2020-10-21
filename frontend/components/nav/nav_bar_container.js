//MOVED ALL CONNECT LOGIC TO nav_bar.jsx

// import Navbar from './nav_bar';
// import { connect } from 'react-redux';
// import { logout } from '../../actions/session/session_actions';
// import { getIncomingFriendRequests } from '../../reducers/selectors/friend_request_selectors';

// const mapStateToProps = (state) => {
//     return ({
//         currentUser: state.entities.users[state.session.currentUser],
//         friendRequests: getIncomingFriendRequests(state.entities.friendRequests, state.session.currentUser)
//     })
// }

// const mapDispatchToProps = (dispatch) => {
//     return ({
//         logout: () => dispatch(logout())
//     })
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Navbar);