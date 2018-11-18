import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import Splash from './splash';

const msp = ({ session, entities }) => {

  return {
    currentUser: entities.users[session.currentUserId]

  };
};

const mdp = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: (modal, projectId) => dispatch(openModal(modal, projectId)),
  closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(Splash);
