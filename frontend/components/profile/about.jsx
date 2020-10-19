import React from 'react'

export default class About extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return (
            <div className='profile-intro full'>
                <div>About</div>
                <div><div className="work-icon"/>Works at {this.props.user.work}</div>
                <div><div className="school-icon"/>Studied at {this.props.user.school}</div>
                <div><div className="location-icon"/>Lives in {this.props.user.location}</div>
                <div><div className="birthday-icon"/>Born on: {this.props.user.birthday}</div>
            </div>
        )
    }
}