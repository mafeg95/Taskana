import React from 'react';
import { withRouter } from 'react-router-dom';
import DatePicker from 'react-datepicker';


class TaskForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: props.task.title,
      description: props.task.description,
      completed: props.task.completed
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const { task, column, project, updateTask, closeModal } = this.props;
    debugger
    this.update(e.target.id)(e);
    const newTask = Object.assign(task, this.state);
    updateTask(newTask, column.id, project.id);
  }

  componentDidUpdate(prevProps){
    const { task, column, project, fetchTask, updateTask } = this.props;
    if ((prevProps.task.title != this.state.title || prevProps.task.description != this.state.description || this.state.completed != prevProps.task.completed)){ // this.state.title
      const newTask = Object.assign(task, this.state);
      updateTask(newTask, column.id, project.id);
      fetchTask(newTask.id, column.id, project.id);
    }
  }

  update(field) {
    return e => {
      if (e.key === undefined){
        this.setState({ [field]: this.state[field].slice(0, -1)});
      } else {
        this.setState({ [field]: this.state[field] + e.key });
      }
    };
  }

  toggleComplete(){
    const {updateTask, column, project, task } = this.props;
    if (this.state.completed === false){
      this.setState({completed: true});
    } else if (this.state.completed === true) {
      this.setState({completed: false});
    }
  }

  toggleLabel(){
    debugger
    if(this.state.completed === false){
      return "Mark Complete";
    } else if (this.state.completed === true) {
      return "Completed";
    }
  }

  render(){
    const { task, column, project, closeModal } = this.props;
    debugger
    return (
      <section className="task-pane">
        <div className="single-task-pane">
          <form className="task-box" onKeyPress={this.handleSubmit}>
            <div className="single-task-scrollable">
              <div className="task-toolbar">
                <div className="task-toolbar-items">
                  <div className={`complete-task ${this.state.completed}`} onClick={this.toggleComplete}>
                    <i className="fas fa-check"></i>
                    {this.toggleLabel()}
                  </div>
                </div>
                <div className="three-dot-menu-task">
                </div>
                <div className="close-x" onClick={() => closeModal()}>&times;</div>
              </div>
              <div className="task-title">
                <div className="title-task">
                  <textarea id="title" className="title-task-textarea"
                    rows="1"
                    onChange={this.update('title')}
                    value={this.state.title}>
                  </textarea>
                </div>
              </div>
              <div className="assignee-date-task">
                <div className="due-date-task">
                  <div className="due-date-task-token">
                    <div className="date-token-button">
                      <div className="task-token-icon">
                        <div className="task-icon">
                          <i className="fas fa-calendar fa-task"></i>
                        </div>
                      </div>
                      <div className="task-token-label">
                        Due Date
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="task-description-pane">
                <div className="task-description-label">
                  <i className="fas fa-align-left fa-task"></i>
                </div>
                <div className="task-description">
                  <div className="description-task">
                    <textarea id="description" className="description-task-textarea"
                      onChange={this.update('description')}
                      value={this.state.description}
                      placeholder="Description"
                      ></textarea>
                  </div>
                </div>
              </div>
              <div className="task-projects">
                <div className="task-projects-label">
                  <i className="fas fa-clipboard-list fa-task"></i>
                </div>
                <div className="task-projects">
                  <div className="task-project-list">
                    <div className="task-project-token">
                      <div className="task-project-link">
                        <div className="task-pill">
                          <span>{project.name}</span>
                        </div>
                      </div>
                      <div className="task-column-link">
                        <span>{column.name}</span>
                        <i></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <footer className="single-pane-footer">
            <div className="comment-composer">
              <div className="avatar">
              </div>
              <div className="comment-composer-editor">
                <div className="scrollable">
                  <div className="comment=composer-text-editor-container">
                    <div className="text-placeholder">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="followers-bar">
              <label className="followers-label">
              </label>
              <div className="followers-list">
                <div className="removable-avatar">
                  <div className="footer-avatar">
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </section>
    );
  }
}

export default TaskForm;
