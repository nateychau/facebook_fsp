import React from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../actions/user_actions';

const mSTP = (state, ownProps) => {
    return {
        liker: state.entities.users[ownProps.likerId]
    }
}

const mDTP = (dispatch, ownProps) => {
    return {
        getLiker: () => dispatch(getUser(ownProps.likerId))
    }
}

class LikeHoverRow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        if(!this.props.liker){
            this.props.getLiker();
        }
    }

    render(){
        if(!this.props.liker){
            return null;
        }
        return (
            <div className="like-hover-row">{`${this.props.liker.first_name} ${this.props.liker.last_name}`}</div>
        )
    }
}

export default connect(mSTP, mDTP)(LikeHoverRow);