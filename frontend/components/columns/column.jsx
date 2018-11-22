import React from 'react';
import merge from 'lodash/merge';

class Column extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: this.props.column.name
    };
    this.headerOrEdit = this.headerOrEdit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.deleteButton = this.deleteButton.bind(this);
  }



  taskIds(){
    return true ? "not-empty" : "empty";
  }
  deleteButton(column) {
    const { deleteColumn, projectId } = this.props;
    return false ? <span className="no-delete"></span> : <button className="column-menu-item" onClick={() => deleteColumn(column.id, projectId)}><span className="column-menu-item-label">Delete</span></button>;
  }

  handleEdit(e) {
    const { projectId } = this.props;
    e.preventDefault();
    this.props.column.name = this.state.name;
    const column = Object.assign({}, this.props.column );
    if (e.key === 'Enter'){
      this.props.deselectEdit();
      this.props.updateColumn(column, projectId);
    } else {
      this.update()(e);
    }
  }

  update() {
    return e => {
      return this.setState({ name: this.state.name + e.key});
    };
  }

  // editForm(){
  //   const {column} = this.props;
  //   return (<form className="new-board-form" onKeyPress={this.handleEdit}>
  //     <input type="text" className="new-column-name"
  //       onChange={this.update()}
  //       value={column.name}
  //       placeholder="New Column"
  //       autoFocus></input>
  //   </form>);
  // }

  headerOrEdit(){
    const { column } = this.props;
    if (this.props.editing === false){
      return (
        <div className="column-header-wrapper">
          <h1>{column.name}</h1>
          <i class="fas fa-angle-down"></i>
        </div>);
    } else {
      return (<form className="new-board-form" onKeyPress={this.handleEdit}>
        <input type="text" className="new-column-name"
          onChange={this.update()}
          value={this.state.name}
          placeholder="New Column"
          autoFocus></input>
      </form>);
    }
  }

  render(){
    const { column, deleteColumn, updateColumn, projectId, selectEdit, deselectEdit } = this.props;
    return (
      <div className="column-wrapper">
        <div className="board-column">
          <div className={this.taskIds()}>
            <div className="draggable">
              <div className="board-column-header">
                {this.headerOrEdit()}
                <div className="layer-positioner">
                  <div className="layer">
                    <div className="dropdown-edit-delete">
                      <div className="column-menu">
                          <button className="column-menu-item" onClick={() => selectEdit()}>
                            <span className="column-menu-item-label">
                              Edit
                            </span>
                          </button>
                        {this.deleteButton(column)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="board-column-body" onClick={() => deselectEdit()}>
            <div className="add-card">
            </div>
            <div className="card-container">
              <div className="card-scrollable">
                <div className="cards">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Column;
