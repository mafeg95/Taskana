import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { requestAllTeams, createTeam } from '../../actions/team_actions';
import { login, removeErrors, demoLogin } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const msp = (state) => {
  return {
    teamId: state.session.currentTeamId,
    errors: state.errors.session,
    formType: 'Log In',
    navMessage: "Don't have an account?",
    formTitle: "Log in"
  };
};

const mdp = dispatch => {
  return {
    requestAllTeams: () => dispatch(requestAllTeams()),
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
