import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, removeErrors, demoLogin } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const msp = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Sign Up',
    navLink: <Link to="/login">Log in</Link>,
    navMessage: "Already have an account?",
    formTitle: 'Sign up'
  };
};

const mdp = dispatch => {
  return {
    processForm: user => dispatch(signup(user)),
    removeErrors: () => dispatch(removeErrors()),
    demoLogin: () => dispatch(demoLogin()),
    otherForm: (
      <button className="modal-login" onClick={() => dispatch(openModal('Log In'))}>
        Log In
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(SessionForm);

//still need to mdp for the demoLogin
