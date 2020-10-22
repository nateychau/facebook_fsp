import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { createLike, deleteLike } from './actions/like_actions'

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
      const preloadedState = {
        entities: {
          users: { [window.currentUser.id]: window.currentUser }
        },
        session: { currentUser: window.currentUser.id }
      };
      store = configureStore(preloadedState);
      delete window.currentUser;
    } else {
      store = configureStore();
    }

    //BEGIN TESTING
    window.dispatch = store.dispatch;
    window.createLike = createLike; 
    window.deleteLike = deleteLike;
    //END TESTING

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
  });