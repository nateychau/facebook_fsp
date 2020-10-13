import React from "react";
import GreetingContainer from "./nav/greeting_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Feed from './feed'

const App = () => (
  <div>
    {/* <header className="splash">
      <h1>Facebook</h1>
      <GreetingContainer />
    </header> */}
    <AuthRoute path="/login" component={LoginFormContainer}/>
    <AuthRoute path="/signup" component={SignupFormContainer}/>
    <ProtectedRoute exact path="/" component={Feed}/>
  </div>
);

export default App;