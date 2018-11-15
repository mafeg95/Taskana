import { combineReducers } from 'redux';
import users from './users_reducer';
import projects from './project_reducer';

export default combineReducers({
  users,
  projects
});
