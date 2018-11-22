import React from 'react';
import { connect } from 'react-redux';

import AsideSectionProjectIndex from './aside_section_index';
import { requestAllProjects } from '../../actions/project_actions';
import { openModal } from '../../actions/modal_actions';
import { closeNav, deselectNewColumn, deselectEdit } from '../../actions/ui_actions';


const msp = state => {
  return {
    projects: Object.values(state.entities.projects),
    sidebar: state.ui.sidebar
  };
};

const mdp = dispatch => {
  return {
    requestAllProjects: () => dispatch(requestAllProjects()),
    closeNav: () => dispatch(closeNav()),
    deselectNewColumn: () => dispatch(deselectNewColumn()),
    deselectEdit: () => dispatch(deselectEdit())
  };
};

export default connect(msp, mdp)(AsideSectionProjectIndex);