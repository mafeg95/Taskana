import React from 'react';
import { Link } from 'react-router-dom';
import { closeNav } from '../../actions/ui_actions';

class AsideSectionProjectIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const { teamId, requestTeam, requestAllProjects } = this.props;

    requestTeam(teamId);
    // requestAllProjects(teamId);
  }

  componentDidUpdate(prevProps){
    if (prevProps.location.pathname != this.props.location.pathname){

      this.props.requestTeam(this.props.teamId);
      this.props.requestAllProjects(this.props.teamId);
    }
  }

  render(){
    const { teamId, teams, projects, deselectNewColumn, deselectEdit, closeDropdown, hideTaskNew, closeDropdownTask, closeTeamDropdown } = this.props;
    return (
      <aside id="aside-index" className="aside-index"
        style={{ width: this.props.sidebar ? '250px' : "0" }}
        onClick={() => {
          deselectNewColumn();
          deselectEdit();
          closeDropdown();
          hideTaskNew();
          closeDropdownTask();
          closeTeamDropdown();
        }}>
        <section className="aside-project-index" >
          <div className="aside-top">
            <Link to={`/teams/${teamId}`} className="logo">
              <h1>Home</h1>
            </Link>
            <button className="closebtn" onClick={this.props.closeNav}> &#60; &#9776;</button>
          </div>
          <section className="aside-projects aside-teams">
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
