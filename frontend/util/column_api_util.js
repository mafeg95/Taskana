// export const fetchProjectColumns = projectId => {
//   return $.ajax({
//     method: 'GET',
//     url: `api/projects/${projectId}/columns`
//   });
// };

export const createColumn = (column, projectId) => {

  return $.ajax({
    method: 'POST',
    url: `api/projects/${projectId}/columns/`,
    data: { column }
  });
};

export const updateColumn = (column, projectId) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/projects/${projectId}/columns/${column.id}`,
    data: {column}
  });
};

export const deleteColumn = (columnId, projectId) => {
  
  return $.ajax({
    method: 'DELETE',
    url: `api/projects/${projectId}/columns/${columnId}`
  });
};
