import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, removeErrors, demoLogin } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const msp = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Log In',
    navMessage: "Don't have an account?",
    formTitle: "Log in"
  };
};

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors()),
    demoLogin: () => dispatch(demoLogin()),
    otherForm: (
      <button className="modal-signup" onClick={() => dispatch(openModal('Sign Up'))}>
        Sign Up
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(SessionForm);
