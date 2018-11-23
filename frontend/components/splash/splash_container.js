import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import Splash from './splash';
import { openNav, deselectNewColumn, deselectEdit, closeDropdown, hideTaskNew } from '../../actions/ui_actions';
import { withRouter } from 'react-router-dom';

const msp = ({ session, entities, ui }, ownProps) => {

  return {
    currentUser: entities.users[session.currentUserId],
    sidebar: ui.sidebar,
    currentProject: (ownProps.location.pathname === '/') ? null : entities.projects[session.currentProjectId]
  };
};

const mdp = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: (modal, projectId) => dispatch(openModal(modal, projectId)),
  closeModal: () => dispatch(closeModal()),
  openNav: () => dispatch(openNav()),
  deselectNewColumn: () => dispatch(deselectNewColumn()),
  deselectEdit: () => dispatch(deselectEdit()),
  closeDropdown: () => dispatch(closeDropdown()),
  hideTaskNew: () => dispatch(hideTaskNew())
});

export default withRouter(connect(msp, mdp)(Splash));
