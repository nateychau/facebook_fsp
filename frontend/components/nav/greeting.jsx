import React from 'react';
import { Link } from 'react-router-dom';

export default class Greeting extends React.Component {
    constructor(props){
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(){
        this.props.logout();
    }

    render(){
        if(this.props.currentUser){
            return (
                <div>
                    <h3>Welcome, {this.props.currentUser.first_name}</h3>
                    <button onClick={this.handleLogout}>Logout</button>
                </div>
            )
        }else{
            return (
                <div>
                    <Link to="/login">Login</Link>
                    <br/>
                    <Link to="/signup">Sign up</Link>
                </div>
            )
        }
    }
}