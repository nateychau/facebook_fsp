import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getPosts } from '../../actions/post_actions';

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.currentUser],
        wallUser: state.entities.users[ownProps.match.params.userId]
    }
}

//ADD A FILTERED GET POST ACTION
// const mDTP = (dispatch) => {
//     return {
//         getPosts: ()
//     }
// }


export default class Wall extends React.Component{
    constructor(props){
        super(props);
    }



    render(){
        return (
            <div className="wall-container">Wall placeholder</div>
        )
    }
}