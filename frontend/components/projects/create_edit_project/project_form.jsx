import React from 'react';
import { withRouter } from 'react-router-dom';

class ProjectForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.project;
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  update(field) {
    return e => this.setState({ [field]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const project = Object.assign({}, this.state);
    this.props.action(project).then(this.props.closeModal);
  }

  componentWillUnmount() {
    if (this.props.formType === 'Create Project' || this.props.formType === 'Edit Project'){
      this.props.removeErrors();
    }
  }

  renderErrors(){
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <section className="new-edit-modal">
        <div onClick={this.props.closeModal} className="close-x">X</div>
        <h1>{this.props.formMessage}</h1>
        <form onSubmit={this.handleSubmit} className="create-edit-box">
          {this.renderErrors()}
          <div className="create-edit-form">
            <label htmlFor="name">
              Name
            </label>
              <input id="name" type="text"
                onChange={this.update('name')}
                value={this.state.name}
                className="create-edit-input"/>
              <label htmlFor="description">Description</label>
              <input id="description" type="text"
                onChange={this.update('description')}
                value={this.state.description}
                className="create-edit-input"/>
              <input className="create-edit-submit" type="submit" value={this.props.formType}/>
          </div>
        </form>
      </section>
    );
  }

}

export default withRouter(ProjectForm);
