import React from 'react';
import ProjectIndexItem from '../projects/index_project/project_index_item_container';


class MainSectionProjectIndex extends React.Component {

  componentDidMount(){
    this.props.requestAllProjects();
  }

  

  render(){
    const { projects, openModal } = this.props;
    return (
      <div className="index">
        <section className="main-index">
          <h1 className="project-index">Projects</h1>
          <section className="main-projects">
            <div className="projects-list">
              {projects.map(project => <ProjectIndexItem key={project.id} project={project} openModal={this.props.openModal}/>)}
              <button className="project-index-item new-project" onClick={() => openModal('Create Project')}>
                <div className="tile-structure">
                  <div className="tile-s-child">
                    <div className="tile-new">
                      <div className="card"></div>
                    </div>
                  </div>
                  <p className="label-projects">New Project</p>
                </div>
              </button>
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default MainSectionProjectIndex;
