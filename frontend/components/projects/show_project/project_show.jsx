import React from 'react';
import { Link } from 'react-router-dom';

class ProjectShow extends React.Component {
  componentDidMount(){
    this.props.requestProject(this.props.projectId);
  }

  componentDidUpdate(prevProps){
    if (prevProps.projectId != this.props.projectId){
      this.props.requestProject(this.props.projectId);
    }
  }
  render(){
    return (
      <div className="single-project">
        
      </div>
    );
  }
}

export default ProjectShow;
