import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, REMOVE_ERRORS } from '../actions/session_actions';

export default (state = [], action) => {
  // debugger
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
        return action.errors;
    case RECEIVE_CURRENT_USER:
    case REMOVE_ERRORS:
    debugger
      return [];
    default:
      return state;
  }
};
