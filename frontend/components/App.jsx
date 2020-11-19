import React from "react";
import Navbar from "./nav/nav_bar";
import LoginFormContainer from "./session/login_form_container";
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Feed from './feed'
import Modal from './session/modal'
import Profile from './profile/profile'
import PostModal from './posts/post_modal'
import ProfilePicModal from './profile/profil_pic_modal'
import ReactGA from 'react-ga';
import { SearchIndexContainer } from './nav/search-index';

const App = () => {
  ReactGA.initialize('G-GTEBZXX0BX');
  ReactGA.pageview('/');
  return (
  <div className='app'>

    <Modal/>
    <ProtectedRoute path="/users/:userId" component={PostModal} />
    <ProtectedRoute exact path="/" component={PostModal} />
    <ProtectedRoute path="/users/:userId" component={ProfilePicModal}/>
    <AuthRoute exact path="/" component={LoginFormContainer}/>
    <ProtectedRoute path="/" component={Navbar}/>
    <Switch>
      <ProtectedRoute exact path="/search/:query" component={SearchIndexContainer}/>
      <ProtectedRoute path="/users/:userId" component={Profile}/>
      <ProtectedRoute exact path="/" component={Feed}/>
      <Redirect to="/" />
    </Switch>
  </div>
  )
};

export default App;