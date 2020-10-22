import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions';

const mDTP = (dispatch) => ({
    updateUser: (user) => dispatch(updateUser(user))
})

class EditBio extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            editing: false,
            body: this.props.user.bio
        }
        this.handleOpenEdit = this.handleOpenEdit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleOpenEdit(){
        this.setState({editing: true})
    }

    handleInput(e){
        this.setState({body: e.target.value});
    }

    handleSubmit(){
        this.props.updateUser({id: this.props.user.id, bio: this.state.body})
            .then(this.setState({editing: false}));
    }

    handleCancel(){
        this.setState({editing: false, body: this.props.user.bio})
    }

    render(){
        if (!this.state.editing){
            return (
                <div className='bio-edit'>
                    <div className='edit-link' onClick={this.handleOpenEdit}>Edit</div>
                </div>
            )
        }
        return (
            <div className='bio-edit'>
                <textarea 
                    value={this.state.body} 
                    onChange={this.handleInput}>
                </textarea>
                <div className='about-text-buttons'>
                    <button className='cancel-btn' onClick={this.handleCancel}>Cancel</button>
                    <button disabled={this.props.user.bio === this.state.body ? true : false } className='submit-btn' onClick={this.handleSubmit}>Save</button>
                </div>
            </div>
        )
    }

}

export default connect(null, mDTP)(EditBio);