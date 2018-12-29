import { RECEIVE_TEAM, RECEIVE_ALL_TEAMS } from '../actions/team_actions';
import { RECEIVE_PROJECT, REMOVE_PROJECT } from '../actions/project_actions';
import merge from 'lodash/merge';

const TeamsReducer = (state = {}, action) => {

  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TEAM:
      return merge({}, state, {[action.team.id]: action.team});
    case RECEIVE_ALL_TEAMS:
      return merge({}, state, action.teams);
    case REMOVE_PROJECT:
      newState = merge({}, state);
      const projectIds = newState[action.payload.project.team_id].project_ids;
      projectIds.splice(projectIds.indexOf(action.pauload.project.id), 1);
      return newState;
    default:
      return state;
  }
};

export default TeamsReducer;
