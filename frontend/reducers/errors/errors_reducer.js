import { combineReducers } from 'redux';
import { loginErrorsReducer } from './login_errors_reducer';
import { signupErrorsReducer } from './sign_up_errors_reducer';
import { generalErrorsReducer } from './general_errors_reducer';

const errorsReducer = combineReducers({
    login: loginErrorsReducer,
    signup: signupErrorsReducer,
    general: generalErrorsReducer
})

export default errorsReducer