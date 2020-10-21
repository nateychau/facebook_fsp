import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
  } from '../actions/session/session_actions';
  
  const _nullUser = {currentUser: null}

  export const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state) 
    switch (action.type){
      case RECEIVE_CURRENT_USER:
        return Object.assign({}, {currentUser: action.data.user.id})
      case LOGOUT_CURRENT_USER:
        return _nullUser;
        default:
          return state;
    }
  }