//THIS FILE IS DEPRECATED. CHECK MODAL.JSX


import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session/session_actions'
import SessionForm from './login_form'

const mapStateToProps = (state, ownProps) => {

    return ({
        errors: state.errors,
        formType: 'signup',
        session: state.session
    }) 
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return ({
        processForm: (user) => dispatch(signup(user)),
        clearErrors: () => dispatch(clearErrors())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)