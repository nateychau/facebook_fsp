import { combineReducers } from 'redux';
import { usersReducer } from './users_reducer';
import { postReducer } from './post_reducer';
import { commentReducer } from './comments_reducer';
import { friendRequestReducer } from './friend_requests_reducer';
import { friendshipReducer } from './friendship_reducer';
import { likeReducer } from './like_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    posts: postReducer,
    comments: commentReducer,
    friendRequests: friendRequestReducer,
    friendships: friendshipReducer,
    likes: likeReducer
});

export default entitiesReducer