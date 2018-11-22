import { connect } from 'react-redux';
import NewColumn from './new_column_form';
import { createColumn } from '../../../actions/column_actions';
import React from 'react';
import { deselectEdit } from '../../../actions/ui_actions';

const msp = (state, ownProps) => {

  return {
    projectId: ownProps.projectId
  };
};

const mdp = dispatch => {
  return {
    createColumn: (column, projectId) => dispatch(createColumn(column, projectId)),
    deselectEdit: () => dispatch(deselectEdit())
  };
};

export default connect(msp, mdp)(NewColumn);
