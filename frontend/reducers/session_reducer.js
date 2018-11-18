import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { OPEN_MODAL } from '../actions/modal_actions';

const defaultState = { currentUserId: null, currentProjectId: null};

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUserId: action.currentUser.id };
    case LOGOUT_CURRENT_USER:
      return defaultState;
    case OPEN_MODAL:
      return Object.assign({}, state, {currentProjectId: action.projectId})
    default:
      return state;
  }
};

export default sessionReducer;
