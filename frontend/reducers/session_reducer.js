import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { OPEN_MODAL } from '../actions/modal_actions';
import { RECEIVE_PROJECT } from '../actions/project_actions';
import merge from 'lodash/merge';
const defaultState = { currentUserId: null, currentProjectId: null};

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUserId: action.currentUser.id };
    case LOGOUT_CURRENT_USER:
      return defaultState;
    case OPEN_MODAL:
      return Object.assign({}, state, {currentProjectId: action.projectId});
    case RECEIVE_PROJECT:
      return merge({}, state, {currentProjectId: action.project.id});
    default:
      return state;
  }
};

export default sessionReducer;
