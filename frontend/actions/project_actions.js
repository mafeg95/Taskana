import * as ProjectAPIUtil from '../util/project_api_util';

export const RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const RECEIVE_PROJECT_ERRORS = 'RECEIVE_PROJECT_ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS';

export const receiveProjects = () => {
  return {
    type: RECEIVE_ALL_PROJECTS,
  };
};

export const receiveProject = project => {
  return {
    type: RECEIVE_PROJECT,
    project
  };
};

export const removeProject = projectId => {
  return {
    type: REMOVE_PROJECT,
    projectId
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_PROJECT_ERRORS,
    errors
  };
};

export const removeErrors = () => {
  return {
    type: REMOVE_ERRORS
  };
};

export const requestAllProjects = () => dispatch => {
  return ProjectAPIUtil.fetchAllProjects().then(() => (
    dispatch(receiveProjects())
  ));
};

export const requestProject = id => dispatch => {
  return ProjectAPIUtil.fetchSingleProject(id).then(project => (
    dispatch(receiveProject(project))
  ), err => (dispatch(receiveErrors(err.responseJSON))));
};

export const createProject = project => dispatch => {
  return ProjectAPIUtil.createProject(project).then(project => (
    dispatch(receiveProject(project))
  ), err => (dispatch(receiveErrors(err.responseJSON))));
};

export const updateProject = project => dispatch => {
  return ProjectAPIUtil.updateProject(project).then(project => (
    dispatch(receiveProject(project))
  ), err => (dispatch(receiveErrors(err.responseJSON))));
};

export const deleteProject = projectId => dispatch => {
  return ProjectAPIUtil.deleteProject(projectId).then(project => (
    dispatch(removeProject(projectId))));
};
