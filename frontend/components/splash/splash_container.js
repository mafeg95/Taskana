import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import Splash from './splash';

const msp = ({ session, entities }) => {
  debugger
  return {
    currentUser: entities.users[session.currentUserId]

  };
};

const mdp = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(Splash);
