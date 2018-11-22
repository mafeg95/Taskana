import * as ColumnAPIUtil from '../util/column_api_util';

// export const RECEIVE_ALL_COLUMNS = 'RECEIVE_ALL_COLUMNS';
export const RECEIVE_COLUMN = 'RECEIVE_COLUMN';
export const RECEIVE_COLUMN_ERRORS = 'RECEIVE_COLUMN_ERRORS';
export const REMOVE_COLUMN = 'REMOVE_COLUMN';

// export const receiveColumns = ({columns, project}) => {
//   return {
//     type: RECEIVE_ALL_COLUMNS,
//     columns,
//     project
//   };
// };

export const receiveColumn = (column) => {

  return {
    type: RECEIVE_COLUMN,
    column
  };
};

export const removeColumn = (column) => {
  return {
    type: REMOVE_COLUMN,
    column
  };
};


// export const requestAllColumns = (projectId) => dispatch => {
//   return ColumnAPIUtil.fetchProjectColumns(projectId).then(payload => (
//     dispatch(receiveColumns(payload))
//   ));
// };

export const createColumn = (column, projectId) => dispatch => {
  return ColumnAPIUtil.createColumn(column, projectId).then(res => {

    return dispatch(receiveColumn(res));
  });
};

export const updateColumn = (column, projectId) => dispatch => {
  return ColumnAPIUtil.updateColumn(column, projectId).then(column => (
    dispatch(receiveColumn(column))
  ));
};

export const deleteColumn = (columnId, projectId) => dispatch => {
  return ColumnAPIUtil.deleteColumn(columnId, projectId).then(column => (
    dispatch(removeColumn(column))
  ));
};
