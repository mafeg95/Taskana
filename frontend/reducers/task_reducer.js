import { RECEIVE_TASK, REMOVE_TASK } from '../actions/task_actions';
import { RECEIVE_COLUMN } from '../actions/column_actions';
import {RECEIVE_PROJECT } from '../actions/project_actions';
import merge from 'lodash/merge';

const TasksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PROJECT:
      return merge({}, state, action.tasks);
    case RECEIVE_COLUMN:
      return merge({}, state, action.tasks);
    case RECEIVE_TASK:
      return merge({}, state, {[action.task.id]: action.task});
    case REMOVE_TASK:
      let newState = merge({}, state);
      delete newState[action.task.id];
      return newState;
    default:
      return state;
  }
};

export default TasksReducer;
