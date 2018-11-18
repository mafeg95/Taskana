import React from 'react';
import { connect } from 'react-redux';

import MainSectionProjectIndex from './main_section_index';
import { requestAllProjects } from '../../actions/project_actions';
import { openModal } from '../../actions/modal_actions';

const msp = state => {
  return {
    projects: Object.values(state.entities.projects)
  };
};

const mdp = dispatch => {
  return {
    requestAllProjects: () => dispatch(requestAllProjects()),
    openModal: (modal, projectId) => dispatch(openModal(modal, projectId)),
  };
};

export default connect(msp, mdp)(MainSectionProjectIndex);
