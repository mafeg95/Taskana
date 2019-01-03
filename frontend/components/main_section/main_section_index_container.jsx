import React from 'react';
import { connect } from 'react-redux';
import { closeTeamDropdown } from '../../actions/ui_actions';
import MainSectionProjectIndex from './main_section_index';
import { requestAllProjects, deleteProject } from '../../actions/project_actions';
import { openModal } from '../../actions/modal_actions';
import { requestTeam } from '../../actions/team_actions';

const msp = (state, {match}) => {
  const teamId = parseInt(match.params.teamId);

  return {
    projects: Object.values(state.entities.projects),
    sidebar: state.ui.sidebar,
    teamId
  };
};

const mdp = dispatch => {
  return {
    requestAllProjects: (teamId) => dispatch(requestAllProjects(teamId)),
    openModal: (modal, projectId) => dispatch(openModal(modal, projectId)),
    openNav: () => dispatch(openNav()),
    deleteProject: (projectId, teamId) => dispatch(deleteProject(projectId, teamId)),
    requestTeam: (teamId) => dispatch(requestTeam(teamId)),
    closeTeamDropdown: () => dispatch(closeTeamDropdown())
  };
};

export default connect(msp, mdp)(MainSectionProjectIndex);
