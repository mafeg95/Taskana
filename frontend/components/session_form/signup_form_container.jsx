import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, removeErrors, demoLogin } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = ({ errors }) => {

  return {
    errors: errors.session,
    formType: 'signup',
    navLink: <Link to="/login">Log in</Link>,
    navMessage: "Already have an account?",
    formTitle: 'Sign Up'
  };
};

const mdp = dispatch => {
  return {
    processForm: user => dispatch(signup(user)),
    removeErrors: () => dispatch(removeErrors()),
    demoLogin: () => dispatch(demoLogin())
  };
};

export default connect(msp, mdp)(SessionForm);

//still need to mdp for the demoLogin
