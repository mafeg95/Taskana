export const createTask = (task, columnId, projectId) => {
  debugger
  return $.ajax({
    method: 'POST',
    url: `api/projects/${projectId}/columns/${columnId}/tasks/`,
    data: { task }
  });
};

export const updateTask = (task, columnId, projectId) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/projects/${projectId}/columns/${columnId}/tasks/${task.id}`,
    data: { task }
  });
};

export const deleteTask = (taskId, columnId, projectId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/projects/${projectId}/columns/${columnId}/tasks/${taskId}`
  });
};
