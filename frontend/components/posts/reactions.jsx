import React from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../actions/user_actions';
import LikeHover from './like_hover';

const mSTP = (state, ownProps) => {
    return {
        firstLiker: ownProps.likes[0] ? state.entities.users[ownProps.likes[0].user_id] : null,
        secondLiker: ownProps.likes[1] ? state.entities.users[ownProps.likes[1].user_id] : null
    }
}

const mDTP = (dispatch) => {
    return {
        getUser: (id) => dispatch(getUser(id))
    }
}

class Reaction extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            displayLikes: false
        }
        this.showDisplay = this.showDisplay.bind(this);
        this.hideDisplay = this.hideDisplay.bind(this);
    }

    showDisplay(){
        this.setState({displayLikes: true});
    }

    hideDisplay(){
        this.setState({displayLikes: false});
    }

    componentDidMount(){
        if(this.props.likes[0] && !this.props.firstLiker){
            this.props.getUser(this.props.likes[0].user_id);
        }
        if(this.props.likes[1] && !this.props.secondLiker){
            this.props.getUser(this.props.likes[1].user_id);
        }
    }

    render(){
        let toRender;
        if(!this.props.likes || !this.props.likes.length){
            return null
        }
        else if(this.props.likes.length === 1){
            if(!this.props.firstLiker){
                return null
            }
            let liker = this.props.firstLiker;
            toRender = `${liker.first_name} ${liker.last_name} liked your post`
        }
        else if(this.props.likes.length === 2){
            if(!this.props.firstLiker || !this.props.secondLiker){
                return null
            }
            let firstLiker = this.props.firstLiker; 
            let secondLiker = this.props.secondLiker;
            //come back to add logic for checking if self-liked 
            toRender = `${firstLiker.first_name} ${firstLiker.last_name} and ${secondLiker.first_name} ${secondLiker.last_name} liked your post`

        }
        else if(this.props.likes.length > 2){
            if(!this.props.firstLiker || !this.props.secondLiker){
                return null
            }
            let firstLiker = this.props.firstLiker; 
            let secondLiker = this.props.secondLiker;
            let others = this.props.likes.length - 2;
            let text = others === 1 ? 'other' : 'others';
            toRender = `${firstLiker.first_name} ${firstLiker.last_name}, ${secondLiker.first_name} ${secondLiker.last_name} and ${others} ${text} liked your post`

        }
        return (
            <div className='like-bar' onMouseEnter={this.showDisplay} onMouseLeave={this.hideDisplay}>
                <div className='like-icon'></div>
                <div className='like-text'>{toRender}</div>
                {this.state.displayLikes ? <LikeHover likes={this.props.likes}/> : <></>}
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(Reaction);