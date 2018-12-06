import * as TaskAPIUtil from '../util/task_api_util';

export const RECEIVE_TASK = 'RECEIVE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

export const receiveTask = payload => {
  return {
    type: RECEIVE_TASK,
    payload
  };
};

export const removeTask = payload => {
  return {
    type: REMOVE_TASK,
    payload
  };
};

export const createTask = (task, columnId, projectId) => dispatch => {

  return TaskAPIUtil.createTask(task, columnId, projectId).then(res => (
    dispatch(receiveTask(res))
  ));
};

export const updateTask = (task, columnId, projectId) => dispatch => {
  return TaskAPIUtil.updateTask(task, columnId, projectId).then(res => (
    dispatch(receiveTask(res))
  ));
};

export const deleteTask = (taskId, columnId, projectId) => dispatch => {
  return TaskAPIUtil.deleteTask(taskId, columnId, projectId).then(res => (
    dispatch(removeTask(res))
  ));
};
