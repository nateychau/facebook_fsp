import React from "react";
import Navbar from "./nav/nav_bar_container";
import LoginFormContainer from "./session/login_form_container";
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Feed from './feed'
import Modal from './session/modal'
import Profile from './profile/profile'

const App = () => (
  <div>

    <Modal/>
    <AuthRoute exact path="/" component={LoginFormContainer}/>
    <ProtectedRoute path="/" component={Navbar}/>
    <Switch>
      <ProtectedRoute path="/users/:userId" component={Profile}/>
      <ProtectedRoute exact path="/" component={Feed}/>
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;