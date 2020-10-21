import { getPosts } from './post_actions';
import { getUsers } from './user_actions';
import { getAuthors } from '../reducers/selectors/user_selectors';

export const UPDATE_FILTER = 'UPDATE_FILTER';

export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});

export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return getPosts(getState().ui.filters)(dispatch)
    // .then(()=>{
    //   dispatch(getUsers(getAuthors(getState().entities.posts, getState().entities.comments)))
    // })
};
