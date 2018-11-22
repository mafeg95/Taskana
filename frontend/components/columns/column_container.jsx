import React from 'react';
import { connect } from 'react-redux';

import { deleteColumn, updateColumn } from '../../actions/column_actions';
import Column from './column';
import { selectEdit, deselectEdit } from '../../actions/ui_actions';

const msp = (state, ownProps) => {

  return {
    projectId: ownProps.column.project_id,
    editing: state.ui.editing
  };
};

const mdp = dispatch => {
  return {
    deleteColumn: (columnId, projectId) => dispatch(deleteColumn(columnId, projectId)),
    updateColumn: (column, projectId) => dispatch(updateColumn(column, projectId)),
    selectEdit: () => dispatch(selectEdit()),
    deselectEdit: () => dispatch(deselectEdit())
  };
};

export default connect(msp, mdp)(Column);
