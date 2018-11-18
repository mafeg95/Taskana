import React from 'react';

class AsideSectionProjectIndex extends React.Component {

  componentDidMount(){
    this.props.requestAllProjects();
  }

  render(){
    const { projects } = this.props;
    return (
      <aside className="aside-index">
        <section className="aside-project-index">
          <section className="aside-projects">
            <ul className="aside-projects-list">
              {projects.map(project => (
                <li className="aside-project">
                  {project.name}
                </li>
              ))}
            </ul>
          </section>
        </section>
      </aside>
    );
  }
}

export default AsideSectionProjectIndex
