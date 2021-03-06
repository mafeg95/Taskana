import React from 'react';
import { connect } from 'react-redux';
import { requestAllTasks } from '../../actions/task_actions';
import { requestAllColumns } from '../../actions/column_actions';
import AsideSectionProjectIndex from './aside_section_index';
import { requestAllProjects, requestProject } from '../../actions/project_actions';
import { openModal } from '../../actions/modal_actions';
import { closeNav, deselectNewColumn, deselectEdit, closeDropdown, hideTaskNew, closeDropdownTask, closeTeamDropdown } from '../../actions/ui_actions';
import { requestAllTeams, requestTeam } from '../../actions/team_actions';

const msp = (state, {match, location}) => {
  const locationArr = location.pathname.split('/');
  let projectId;
  let columnId;
  if (locationArr.includes('projects')){
    projectId = parseInt(locationArr[4]);
    columnId = (Object.keys(state.entities.columns).length !== 0) ? state.entities.projects[projectId].column_ids[0] : null;
  } else {
    projectId = null;
    columnId = null;
  }

  const teamId = parseInt(match.params.teamId);
  // debugger
  return {
    projects: Object.values(state.entities.projects),
    sidebar: state.ui.sidebar,
    teams: Object.values(state.entities.teams),
    teamId,
    projectId,
    columnId,
    firstProject: Object.values(state.entities.projects)[0],
    members: Object.values(state.entities.members),
    teamName: state.entities.teams[teamId] ? state.entities.teams[teamId].name : ''
  };
};

const mdp = dispatch => {
  return {
    requestAllColumns: (teamId, projectId) => dispatch(requestAllColumns(teamId, projectId)),
    requestAllProjects: (teamId) => dispatch(requestAllProjects(teamId)),
    closeNav: () => dispatch(closeNav()),
    deselectNewColumn: () => dispatch(deselectNewColumn()),
    deselectEdit: () => dispatch(deselectEdit()),
    closeDropdown: () => dispatch(closeDropdown()),
    hideTaskNew: () => dispatch(hideTaskNew()),
    closeDropdownTask: () => dispatch(closeDropdownTask()),
    requestAllTeams: () => dispatch(requestAllTeams()),
    requestAllTasks: (teamId, projectId, columnId) => dispatch(requestAllTasks(teamId, projectId, columnId)),
    requestProject: (projectId, teamId) => dispatch(requestProject(projectId, teamId)),
    requestTeam: (teamId) => dispatch(requestTeam(teamId)),
    closeTeamDropdown: () => dispatch(closeTeamDropdown())
  };
};

export default connect(msp, mdp)(AsideSectionProjectIndex);
