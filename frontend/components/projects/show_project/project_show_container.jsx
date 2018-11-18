import { connect } from 'react-redux';

import { requestProject } from '../../../actions/project_actions';
import { selectProject } from '../../../reducers/selectors';
import ProjectShow from './project_show';

const msp = (state, { match }) => {
  const projectId = parseInt(match.params.projectId);
  const project = selectProject(state.entities, projectId);
  return {
    projectId,
    project
  };
};

const mdp = dispatch => ({
  requestProject: id => dispatch(requestProject(id))
});

export default connect(msp, mdp)(ProjectShow);
