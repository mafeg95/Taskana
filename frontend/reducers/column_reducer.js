import { RECEIVE_COLUMN, REMOVE_COLUMN } from '../actions/column_actions';
import { RECEIVE_PROJECT } from '../actions/project_actions';
import merge from 'lodash/merge';

const ColumnsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PROJECT:
      return merge({}, state, action.columns);
    case RECEIVE_COLUMN:
      return merge({}, state, {[action.column.id]: action.column});
    case REMOVE_COLUMN:
    
      let newState = merge({}, state);
      delete newState[action.column.id];
      return newState;
    default:
      return state;
  }
};

export default ColumnsReducer;