import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session/session_actions';
import LoginForm from './login_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        errors: state.errors,
        formType: 'login',
        session: state.session,
        modal: state.ui.modal //used to hide errors if modal is open
    }) 
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return ({
        processForm: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors()),
        openModal: () => dispatch(openModal('signup'))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)