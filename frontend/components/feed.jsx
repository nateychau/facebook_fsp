import React from 'react'
import { connect } from 'react-redux';
import { getCurrentUser } from '../actions/user_actions';

const mSTP = (state) => {
    return ({
        user: state.entities.users[state.session.currentUser]
    })
}

const mDTP = (dispatch) => {
    return ({
        getCurrentUser: () => dispatch(getCurrentUser())
    })
}

class Feed extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getCurrentUser();
    }

    render(){
        return (
            <div className="feed-container">You have no friends :(</div>
        )
    }
}

export default connect(mSTP, mDTP)(Feed)