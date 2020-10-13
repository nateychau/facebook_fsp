import { combineReducers } from 'redux'
import { loginErrorsReducer } from './login_errors_reducer'

const errorsReducer = combineReducers({
    login: loginErrorsReducer
})

export default errorsReducer