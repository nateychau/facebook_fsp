import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
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
                    <a href="https://github.com/nateychau" target="_blank"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/nathan-chau-363130180/" target="_blank"><i className="fab fa-linkedin"></i></a>
                    <a href="https://nateychau.github.io/" target="_blank"><i className="fas fa-address-card"></i></a>
                </div>
                <div className="nav-right">
                <Link to={`/users/${this.props.currentUser.id}`}><button className="btn profile">{this.props.currentUser.first_name}</button></Link>
                    <button className="btn" onClick={this.handleLogout}>Logout</button>
                </div>
            </div>
        )
    }
}