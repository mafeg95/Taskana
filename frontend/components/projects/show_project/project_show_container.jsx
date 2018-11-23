import { connect } from 'react-redux';

import { requestProject } from '../../../actions/project_actions';
import { selectProject } from '../../../reducers/selectors';
import ProjectShow from './project_show';
import { deselectNewColumn, selectNewColumn, deselectEdit, hideTaskNew } from '../../../actions/ui_actions';

const msp = (state, { match }) => {

  const projectId = parseInt(match.params.projectId);
  const project = state.entities.projects[projectId];
  const columns = ((project && project.column_ids) ? project.column_ids.map(id => state.entities.columns[id]) : []);
  return {
    projectId,
    project,
    columns,
    sidebar: state.ui.sidebar,
    creating: state.ui.creating
  };
};

const mdp = dispatch => ({
  requestProject: id => dispatch(requestProject(id)),
  deselectNewColumn: () => dispatch(deselectNewColumn()),
  selectNewColumn: () => dispatch(selectNewColumn()),
  deselectEdit: () => dispatch(deselectEdit()),
  hideTaskNew: () => dispatch(hideTaskNew())
});

export default connect(msp, mdp)(ProjectShow);
