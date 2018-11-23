import { RECEIVE_COLUMN, REMOVE_COLUMN } from '../actions/column_actions';
import { RECEIVE_PROJECT } from '../actions/project_actions';
import { RECEIVE_TASK } from '../actions/task_actions';
import merge from 'lodash/merge';

const ColumnsReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PROJECT:
      return merge({}, state, action.columns);
    case RECEIVE_COLUMN:
      return merge({}, state, {[action.payload.column.id]: action.payload.column});
    case REMOVE_COLUMN:
      newState = merge({}, state);
      delete newState[action.payload.column.id];
      return newState;
    case RECEIVE_TASK:
      newState = merge({}, state);
      if (!newState[action.payload.task.column_id].task_ids.includes(action.payload.task.id)){
        newState[action.payload.task.column_id].task_ids.push(action.payload.task.id);
      }
      return newState;
    default:
      return state;
  }
};

export default ColumnsReducer;
