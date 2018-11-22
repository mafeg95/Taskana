import React from 'react';
import { connect } from 'react-redux';

import { deleteColumn, updateColumn } from '../../actions/column_actions';
import Column from './column';
import { selectEdit, deselectEdit, openDropdown, closeDropdown } from '../../actions/ui_actions';

const msp = (state, ownProps) => {

  return {
    projectId: ownProps.column.project_id,
    editing: state.ui.editing,
    currentColumn: state.entities.columns[state.session.currentColumnId],
    dropdown: state.ui.dropdown
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
