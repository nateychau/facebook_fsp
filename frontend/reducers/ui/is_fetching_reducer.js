import { REQUEST_USER, RECEIVE_USER, RECEIVE_USERS } from '../../actions/user_actions'

const isFetchingReducer = (state={ isFetching: false}, action) => {
    Object.freeze(state);
    switch(action.type){
        case REQUEST_USER:
            return Object.assign({}, {isFetching: true});
        case RECEIVE_USER:
            return Object.assign({}, {isFetching: false});
        case RECEIVE_USERS:
            return Object.assign({}, {isFetching: false});
        default:
            return state;
    }
}

export default isFetchingReducer;