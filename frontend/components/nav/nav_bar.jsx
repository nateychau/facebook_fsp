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
        return (
            <div className="nav-container">
                <div className="nav-left">
                    <Link to="/"><button className="btn">Logo</button></Link>
                </div>
                <div className="nav-center">
                    <i class="fab fa-github"><a href="https://github.com/nateychau"></a></i>
                </div>
                <div className="nav-right">
                <Link to={`/users/${this.props.currentUser.id}`}><button className="btn profile">{this.props.currentUser.first_name}</button></Link>
                    <button className="btn" onClick={this.handleLogout}>Logout</button>
                </div>
            </div>
        )
    }
}