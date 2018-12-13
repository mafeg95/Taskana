import React from 'react';
import { Link, Redirect } from 'react-router-dom';


class Splash extends React.Component {
  constructor(props){
    super(props);
  }

  renderHeader(){

    const { currentProject } = this.props;
    if (currentProject){
      return (<h1>{currentProject.name}</h1>);
    } else {
      return (
        <Link to="/" className="header-link-greeting">
          <h1>Home</h1>
        </Link>
      );
    }
  }

  links() {
    const { openModal, closeModal } = this.props;
    return (
    <div>
      <nav className="login-signup">
        <button className="header-login" onClick={() => openModal('Log In')}>Log In</button>
        &nbsp;
        <button className="header-signup" onClick={() => openModal('Sign Up')}>Sign Up</button>
      </nav>
      <section className="section-splash">
        <div className="splash-content">
          <section className="splash-content-text">
            <div className="further-div">
              <h1 className="splash-h1">Make more time for the work that matters most</h1>
              <p className="splash-text">Asana is the work management platform teams use to stay focused on the goals, projects, and daily tasks that grow your business.</p>
            </div>
          </section>
          <input id="splash-email" type="text"
            className="login-input-splash" required placeholder="name@company.com"/>
            <button className="header-signup" onClick={() => openModal('Sign Up')}>Sign Up</button>
        </div>
      </section>
    </div>
  );
  }

  greeting() {
    const { currentUser, logout, openModal, deselectNewColumn, deselectEdit, closeDropdown, hideTaskNew, closeDropdownTask } = this.props;

    return (
      <section>
        <header>
          <nav className="header" onClick={() => {
              deselectNewColumn();
              deselectEdit();
              closeDropdown();
              hideTaskNew();
              closeDropdownTask();
            }}>
            <div className="left">
              <button className="ham-button" onClick={this.props.openNav}>&#9776;</button>
            </div>
            <div className="high-right">
              <div className="low-left" style={{ marginLeft: this.props.sidebar ? '270px' : '60px'}}>
                {this.renderHeader()}
              </div>
              <div className="right">
                <button className="header-new" onClick={() => openModal('Create Project')}>+ New</button>
                <button className="user-menu">{this.props.name}</button>
                <button className="header-button" onClick={logout}>Log Out</button>
              </div>
            </div>
            <div className="header-shadow"></div>
          </nav>
        </header>
      </section>
    );

  }

  render() {
    const { currentUser } = this.props;
    return currentUser ? this.greeting() : this.links();

  }
  // do i need currentUser and logout?
}

export default Splash;
