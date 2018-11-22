import { combineReducers } from 'redux';
import users from './users_reducer';
import projects from './project_reducer';
import columns from './column_reducer';
import tasks from './task_reducer';

export default combineReducers({
  users,
  projects,
  columns,
  tasks
});
