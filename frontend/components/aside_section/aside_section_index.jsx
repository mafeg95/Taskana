import React from 'react';
import { Link } from 'react-router-dom';
import { closeNav } from '../../actions/ui_actions';

class AsideSectionProjectIndex extends React.Component {
  constructor(props){
    super(props);
    this.requestProjectShow = this.requestProjectShow.bind(this);
  }

  componentDidMount(){

    this.requestProjectShow(this.props.projectId);
  }

  requestProjectShow(projectId){
    const { teamId, columnId, requestProject, requestAllProjects, requestAllColumns, requestAllTasks, firstProject } = this.props;
    if (projectId != null){

      requestProject(projectId, teamId).then(() => {

        return requestAllProjects(teamId);
      });
    } else {
      requestAllProjects(teamId).then(() => requestAllColumns(teamId, firstProject));
    }
  }

  render(){
    const { teamId, teams, projects, deselectNewColumn, deselectEdit, closeDropdown, hideTaskNew, closeDropdownTask } = this.props;
    return (
      <aside id="aside-index" className="aside-index"
        style={{ width: this.props.sidebar ? '250px' : "0" }}
        onClick={() => {
          deselectNewColumn();
          deselectEdit();
          closeDropdown();
          hideTaskNew();
          closeDropdownTask();
        }}>
        <section className="aside-project-index" >
          <div className="aside-top">
            <Link to={`/teams/${teamId}`} className="logo">
              <h1>Home</h1>
            </Link>
            <button className="closebtn" onClick={this.props.closeNav}> &#60; &#9776;</button>
          </div>
          <section className="aside-projects aside-teams">
            <ul className="aside-projects-list">
              {teams.map((team, i) => (
                <li className="aside-project" key={`team-${i}`}>
                  {team.name}
                </li>
              ))}
            </ul>
          </section>
          <section className="aside-projects">
            <ul className="aside-projects-list">
              {projects.map((project, i)=> (
                <Link to={`/teams/${teamId}/projects/${project.id}`} key={`project-${i}`} className="link-project-aside">
                  <li className="aside-project">
                    <svg className="li-square" style={{ backgroundColor: `#${project.color}`}}></svg>
                    {project.name}
                  </li>
                </Link>
              ))}
            </ul>
          </section>
        </section>
      </aside>
    );
  }
}

export default AsideSectionProjectIndex;
