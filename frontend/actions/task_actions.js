import * as TaskAPIUtil from '../util/task_api_util';

export const RECEIVE_TASK = 'RECEIVE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

export const receiveTask = task => {
  return {
    type: RECEIVE_TASK,
    task
  };
};

export const removeTask = task => {
  return {
    type: REMOVE_TASK,
    task
  };
};

export const createTask = (task, columnId, projectId) => dispatch => {
  return TaskAPIUtil.createTask(task, columnId, projectId).then(task => (
    dispatch(receiveTask(task))
  ));
};

export const updateTask = (task, columnId, projectId) => dispatch => {
  return TaskAPIUtil.updateTask(task, columnId, projectId).then(task => (
    dispatch(receiveTask(task))
  ));
};

export const deleteTask = (taskId, columnId, projectId) => dispatch => {
  return TaskAPIUtil.deleteTask(taskId, columnId, projectId).then(task => (
    dispatch(removeTask(task))
  ));
};
