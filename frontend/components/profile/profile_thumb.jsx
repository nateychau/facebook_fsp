import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId]
})

class MainProfile extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="profile-thumb-container">
                <div className="prof-pic">
                    <img src={window.testProfile}></img>
                </div>
                <h2>{`${this.props.user.first_name} ${this.props.user.last_name}`}</h2>
            </div>
        )
    }


}


export default withRouter(connect(mSTP)(MainProfile));