import { RECEIVE_PROJECT, RECEIVE_ALL_PROJECTS, REMOVE_PROJECT } from '../actions/project_actions';
import { RECEIVE_ALL_COLUMNS, RECEIVE_COLUMN, REMOVE_COLUMN } from '../actions/column_actions';
import merge from 'lodash/merge';

const ProjectsReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_PROJECT:

    // case RECEIVE_ALL_COLUMNS:
      // let project = action.payload.project;
      return merge({}, state, {[action.project.id]: action.project});
    case RECEIVE_ALL_PROJECTS:
      return merge({}, action.projects);
    case REMOVE_PROJECT:
      newState = merge({}, state);
      delete newState[action.projectId];
      return newState;
    case RECEIVE_COLUMN:
      newState = merge({}, state);
      if (!newState[action.column.project_id].column_ids.includes(action.column.id)){
        newState[action.column.project_id].column_ids.push(action.column.id);  
      }
      return newState;
    case REMOVE_COLUMN:

      newState = merge({}, state);
      const columnIds = newState[action.column.project_id].column_ids;
      columnIds.splice(columnIds.indexOf(action.column.id), 1);
      return newState;
    default:
      return state;
  }
};

export default ProjectsReducer;
