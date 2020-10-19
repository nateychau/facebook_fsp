import { combineReducers } from 'redux';
import { usersReducer } from './users_reducer';
import { postReducer } from './post_reducer';
import { commentReducer } from './comments_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    posts: postReducer,
    comments: commentReducer
});

export default entitiesReducer