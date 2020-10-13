import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session/session_actions'
import SessionForm from './session_form'

const mapStateToProps = (state, ownProps) => {
    return ({
        errors: state.errors,
        formType: 'login',
        session: state.session
    }) 
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return ({
        processForm: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)