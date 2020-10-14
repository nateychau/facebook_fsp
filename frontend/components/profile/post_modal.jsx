import React from 'react';

const mSTP = state => {
    return {
        modal: state.ui.modal,
    }
}

const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        processForm: (post) => dispatch(publishPost(post)), 
    }
}

class PostModal extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return (

        )
    }
}