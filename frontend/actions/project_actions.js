import * as ProjectAPIUtil from '../util/project_api_util';

export const RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const RECEIVE_PROJECT_ERRORS = 'RECEIVE_PROJECT_ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS';

export const receiveProjects = (projects) => {
  return {
    type: RECEIVE_ALL_PROJECTS,
    projects
  };
};

export const receiveProject = ({project, columns, tasks}) => {

  return {
    type: RECEIVE_PROJECT,
    project,
    columns,
    tasks
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
  return ProjectAPIUtil.fetchAllProjects().then(projects => (
    dispatch(receiveProjects(projects))
  ));
};

export const requestProject = id => dispatch => {
  return ProjectAPIUtil.fetchSingleProject(id).then(payload => {

    return dispatch(receiveProject(payload));
  }, err => (dispatch(receiveErrors(err.responseJSON))));
};

export const createProject = project => dispatch => {

  return ProjectAPIUtil.createProject(project).then(project => {

    return dispatch(receiveProject(project));
  }, err => (dispatch(receiveErrors(err.responseJSON))));
};

export const updateProject = project => dispatch => {
  return ProjectAPIUtil.updateProject(project).then(project => {

    return dispatch(receiveProject(project));
  }, err => {

    return dispatch(receiveErrors(err.responseJSON));
  });
};

export const deleteProject = projectId => dispatch => {
  return ProjectAPIUtil.deleteProject(projectId).then(project => (
    dispatch(removeProject(projectId))));
};
