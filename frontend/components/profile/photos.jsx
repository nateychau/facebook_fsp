import React from 'react'
import { connect } from 'react-redux'
import { getPostsByAuthor } from '../../reducers/selectors/post_selectors';
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
    return {
        photoPosts: getPostsByAuthor(state.entities.posts, ownProps.match.params.userId).filter(post => post.photo)
    }
}

class Photos extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        let photoArr = this.props.photoPosts.length ? 
        this.props.photoPosts.map(photoPost => {
            return (
                <div key={photoPost.id} className='photo-thumb'>
                    <img src={photoPost.photo}></img>
                </div>
            )
        }) : [];
        return (
            <div className={this.props.full ? 'profile-photos full' : 'profile-photos'}>
                <div>Photos</div>
                <ul className='photo-preview'>
                    {photoArr}
                </ul>
            </div>  
        )
    }
}

export default withRouter(connect(mSTP)(Photos));