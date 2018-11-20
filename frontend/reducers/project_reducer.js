import { RECEIVE_PROJECT, RECEIVE_ALL_PROJECTS, REMOVE_PROJECT } from '../actions/project_actions';
import merge from 'lodash/merge';

const ProjectsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PROJECT:

      return merge({}, state, {[action.project.id]: action.project});
    case RECEIVE_ALL_PROJECTS:
      return merge({}, action.projects);
    case REMOVE_PROJECT:
      let newState = merge({}, state);
      delete newState[action.projectId];
      return newState;
    default:
      return state;
  }
};

export default ProjectsReducer;
