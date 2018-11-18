import React from 'react';
import { Link } from 'react-router-dom';


const ProjectIndexItem = ({ project, openModal }) => {
  return (
    <Link exact to={`/projects/${project.id}`} className="project-index-item">
      <div className="tile-structure">
        <div className="tile-s-child">
          <div className="tile">
            <div className="card"></div>
            <button className="body-edit" onClick={() => openModal('Update Project', project.id)}>Edit</button>
          </div>
        </div>
          <p className="label-projects">{project.name}</p>
      </div>
    </Link>
  )
}

export default ProjectIndexItem;
