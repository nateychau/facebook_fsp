import React from "react";
import { Link, Redirect } from "react-router-dom";

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.loginDemo = this.loginDemo.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  loginDemo() {
    let user = {
      email: "de@demo.demo",
      password: "123456",
    };
    this.props.processForm(user);
  }

  render() {
    if (this.props.session.currentUser) {
      return <Redirect to="/"></Redirect>;
    }
    //handle errors

    const errorArr =
      this.props.errors.login.length && !this.props.modal
        ? this.props.errors.login.map((error) => {
            return <li>{error}</li>;
          })
        : [];

    return (
      <div className="splash">
        <div className="splash-text">
          <h2>facebewk</h2>
          <h4>Connect with friends and the world around you on Facebewk.</h4>
        </div>
        <div className="splash-right">
        <div className="login">
          {/* <Link to={path}>{linkHeader}</Link> */}
          {/* <h3>{header}</h3> */}
          <form>
            <div>
              <input
                autoFocus
                className={errorArr.length ? "required" : ""}
                type="text"
                onChange={this.handleInput("email")}
                value={this.state.email}
                placeholder="Email"
              ></input>
            </div>
            <div>
              <input
                className={errorArr.length ? "required" : ""}
                type="password"
                onChange={this.handleInput("password")}
                value={this.state.password}
                placeholder="Password"
              ></input>
            </div>
            {errorArr.length ? <ul className="error">{errorArr}</ul> : <></>}
            <button
              onClick={this.handleSubmit}
              className="btn accent"
              type="submit"
            >
              Log In
            </button>
          </form>
          <div className="line" />
          <button className="btn sign-up" onClick={this.props.openModal}>
            Create New Account
          </button>
          <button className="btn sign-up" onClick={this.loginDemo}>
            Demo User
          </button>
        </div>
        <div className="nav-center">
                    <a href="https://github.com/nateychau/facebook_fsp" target="_blank"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/nathan-chau-363130180/" target="_blank"><i className="fab fa-linkedin"></i></a>
                    <a href="https://nychau.com/#/" target="_blank"><i className="fas fa-address-card"></i></a>
                </div>
          </div>
      </div>
    );
  }
}
