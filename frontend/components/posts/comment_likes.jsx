import React from 'react';
import LikeHover from './like_hover';

export default class CommentLikes extends React.Component {
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

    render(){
        if(!this.props.likes.length){
            return null;
        }
        
        return (
            <div className='comment-like-counter' onMouseEnter={this.showDisplay} onMouseLeave={this.hideDisplay}>
                <div className="like-icon"></div>
                <div>{this.props.likes.length}</div>
                {this.state.displayLikes ? <LikeHover likes={this.props.likes}/> : <></>}
            </div>
        )
    }
}