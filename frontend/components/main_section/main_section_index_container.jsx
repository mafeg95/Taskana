import React from 'react';
import { connect } from 'react-redux';

import MainSectionProjectIndex from './main_section_index';
import { requestAllProjects, deleteProject } from '../../actions/project_actions';
import { openModal } from '../../actions/modal_actions';

const msp = state => {
  return {
    projects: Object.values(state.entities.projects),
    sidebar: state.ui.sidebar
  };
};

const mdp = dispatch => {
  return {
    requestAllProjects: () => dispatch(requestAllProjects()),
    openModal: (modal, projectId) => dispatch(openModal(modal, projectId)),
    openNav: () => dispatch(openNav()),
    deleteProject: (projectId) => dispatch(deleteProject(projectId))
  };
};

export default connect(msp, mdp)(MainSectionProjectIndex);
