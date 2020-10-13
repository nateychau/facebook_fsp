import React from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            password: "",
            email: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    handleInput(type){
        return (e) => {
            this.setState({[type]: e.target.value});
        }
    }

    componentDidMount(){
        this.props.clearErrors();
    }

    render(){
        if(this.props.session.currentUser){
            return <Redirect to="/"></Redirect>
        }
        //Logic for setting up form template 
        const signup = {header: 'Sign Up', path: '/login', linkHeader: 'Log In'};
        const login = {header: 'Log In', path: '/signup', linkHeader: 'Sign Up'};
        const {header, path, linkHeader} = this.props.formType === 'signup' ? signup : login;

        //handle errors

        const errorArr = this.props.errors.login.length ? this.props.errors.login.map((error) => {
            return (
                <li>{error}</li>
            )
        }) : []


        return (
            <div className="splash">
                <div className="splash-text">
                    <h2>facebook</h2>
                    <h4>Connect with friends and the world around you on Facebook.</h4>
                </div>
                <div className={this.props.formType}>
                    {/* <Link to={path}>{linkHeader}</Link> */}
                    {/* <h3>{header}</h3> */}
                    <form>
                        {this.props.formType === 'signup' ? 
                        <>
                            <label>First Name: 
                                <input type="text" onChange={this.handleInput('first_name')} value={this.state.first_name}></input>
                            </label>
                            <label>Last Name: 
                                <input type="text" onChange={this.handleInput('last_name')} value={this.state.last_name}></input>
                            </label>
                        </>
                        : <></>}
                        <div>
                            <input type="text" onChange={this.handleInput('email')} value={this.state.email} placeholder="Email"></input>
                        </div>
                        <div>
                            <input type="password" onChange={this.handleInput('password')} value={this.state.password} placeholder="Password"></input>
                        </div>
                        {errorArr.length ? 
                        <ul className="error">{errorArr}</ul> 
                        : <></>}
                        <button onClick={this.handleSubmit} className="btn accent" type="submit">{header}</button>
                    </form>
                    <div className='line'/>
                    <button className="btn sign-up">Create New Account</button>
                </div>
            </div>
        )
    }
}