import React from 'react';
import { connect } from 'react-redux';

import { deleteTask } from '../../actions/task_actions';
import Task from './task';
import { deselectEdit, closeDropdown, openDropdownTask, closeDropdownTask, hideTaskNew, deselectNewColumn } from '../../actions/ui_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  debugger
  const task = state.entities.tasks[parseInt(ownProps.task.id)];

  return {
    currentTask: state.entities.tasks[state.session.currentTaskId],
    dropdownTask: state.ui.dropdownTask,
    projectId: state.session.currentProjectId,
    dropdownTask2: state.ui.dropdownTask,
  };
};

const mdp = dispatch => {
  return {
    openDropdownTask: (taskId) => dispatch(openDropdownTask(taskId)),
    deselectEdit: () => dispatch(deselectEdit()),
    closeDropdown: () => dispatch(closeDropdown()),
    deselectNewColumn: () => dispatch(deselectNewColumn()),
    hideTaskNew: () => dispatch(hideTaskNew()),
    deleteTask: (taskId) => dispatch(deleteTask(taskId)),
    openModal: (modal, projectId, taskId) => dispatch(openModal(modal, projectId, taskId)),
    closeModal: () => dispatch(closeModal()),
    closeDropdownTask: () => dispatch(closeDropdownTask())
  };
};

export default connect(msp, mdp)(Task);
