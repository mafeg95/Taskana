import React from 'react';
import { connect } from 'react-redux';

import { deleteColumn, updateColumn } from '../../actions/column_actions';
import Column from './column';
import { selectEdit, deselectEdit, openDropdown, closeDropdown } from '../../actions/ui_actions';

const msp = (state, ownProps) => {
  const columnId = parseInt(ownProps.column.id);
  const column = state.entities.columns[columnId];
  const tasks = ((column && column.task_ids) ? column.task_ids.map(id => state.entities.tasks[id]) : []);
  const taskIds = column.task_ids;
  return {
    projectId: ownProps.column.project_id,
    editing: state.ui.editing,
    currentColumn: state.entities.columns[state.session.currentColumnId],
    dropdown: state.ui.dropdown,
    tasks,
    taskIds
  };
};

const mdp = dispatch => {
  return {
    deleteColumn: (columnId, projectId) => dispatch(deleteColumn(columnId, projectId)),
    updateColumn: (column, projectId) => dispatch(updateColumn(column, projectId)),
    selectEdit: (columnId) => dispatch(selectEdit(columnId)),
    deselectEdit: () => dispatch(deselectEdit()),
    openDropdown: (columnId) => dispatch(openDropdown(columnId)),
    closeDropdown: () => dispatch(closeDropdown())
  };
};

export default connect(msp, mdp)(Column);
