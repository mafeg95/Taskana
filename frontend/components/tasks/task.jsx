import React from 'react';

const Task = ({ task, hideTaskNew }) => {
  return (
    <div className="draggable-task-wrapper" onClick={() => hideTaskNew()}>
      <div className="task-container">
        <div className="task-content">
          <div className="task-properties">
            <div className="task-properties-title">
              <h1>{task.title}</h1>
            </div>
            <div className="task-dropdown">
            </div>
          </div>
          <div className="task-meta-data">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Task;
