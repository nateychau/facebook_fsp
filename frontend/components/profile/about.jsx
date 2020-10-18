import React from 'react'

export default class About extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return (
            <div className='profile-intro full'>
                <div>About</div>
                <div>Works at {this.props.user.work}</div>
                <div>Studied at {this.props.user.school}</div>
                <div>Lives in {this.props.user.location}</div>
            </div>
        )
    }
}