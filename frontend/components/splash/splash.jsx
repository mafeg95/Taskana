import React from 'react';
import { Link } from 'react-router-dom';


const Splash = ({ currentUser, logout, openModal, closeModal }) => {

  const links = () => (
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

  const greeting = () => {
    return (
      <section>
        <header>
          <nav className="header">
            <div className="left">
              <span>Button</span>
              <Link to="/" className="header-link">
                <h1>Home</h1>
              </Link>
            </div>
            <div className="right">
              <button className="header-new" onClick={() => openModal('Create Project')}>+ New</button>
              <button className="user-menu">{currentUser.username}</button>
              <button className="header-button" onClick={logout}>Log Out</button>
            </div>
          </nav>
        </header>
      </section>
    )

  }

  return currentUser ? (greeting()) : links();
  // do i need currentUser and logout?
}

export default Splash;
