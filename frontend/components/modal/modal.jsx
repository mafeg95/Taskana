import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LogInFormContainer from '../session_form/login_form_container';
import SignUpFormContainer from '../session_form/signup_form_container';
import CreateProjectFormContainer from '../projects/create_edit_project/create_project_form_container';
import EditProjectFormContainer from '../projects/create_edit_project/edit_project_form_container';

const Modal = ({ modal, closeModal }) => {
  //
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'Log In':
      component = <LogInFormContainer />;
      break;
    case 'Sign Up':
      component = <SignUpFormContainer />;
      break;
    case 'Create Project':
      component = <CreateProjectFormContainer />;
      break;
    case 'Update Project':
      component = <EditProjectFormContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const msp = state => {
  return {
    modal: state.ui.modal
  };
};

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(Modal);
