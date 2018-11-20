import React from 'react';
import { Link } from 'react-router-dom';
import { closeNav } from '../../actions/sidebar_actions';

class AsideSectionProjectIndex extends React.Component {

  componentDidMount(){
    this.props.requestAllProjects();
    // this.closeNav = this.closeNav.bind(this);
  }


  render(){
    const { projects } = this.props;
    return (
      <aside id="aside-index" className="aside-index" style={{ width: this.props.sidebar ? '250px' : "0" }}>
        <section className="aside-project-index" >
          <div className="aside-top">
            <Link to="/" className="logo">
              <h1>Home</h1>
            </Link>
            <button className="closebtn" onClick={this.props.closeNav}> &#60; &#9776;</button>
          </div>
          <section className="aside-projects">
            <ul className="aside-projects-list">
              {projects.map((project, i)=> (
                <Link to={`/projects/${project.id}`} key={`project-${i}`} className="link-project-aside">
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
