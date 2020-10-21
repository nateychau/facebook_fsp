import { combineReducers } from 'redux';
import { usersReducer } from './users_reducer';
import { postReducer } from './post_reducer';
import { commentReducer } from './comments_reducer';
import { friendRequestReducer } from './friend_requests_reducer';
import { friendshipReducer } from './friendship_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    posts: postReducer,
    comments: commentReducer,
    friendRequests: friendRequestReducer,
    friendships: friendshipReducer
});

export default entitiesReducer