import React from 'react';
import { Link } from 'react-router-dom';

const Splash = ({ currentUser, logout, openModal, closeModal }) => {
  const links = () => (
    <nav className="login-signup">
      <button className="header-signup" onClick={() => openModal('login')}>Log In</button>
      &nbsp;
      <button className="header-login" onClick={() => openModal('signup')}>Sign Up</button>
    </nav>
  );
  const greeting = () => (
    <nav className="header">
      <div className="left">
        <Link to="/" className="header-link">
          <h1>Home</h1>
        </Link>
      </div>
      <div className="right">
        <input type="button" placeholder="Search..."></input>
        <button>+ New</button>
        <button>{currentUser.username}</button>
        <button className="header-button" onClick={logout}>Log Out</button>
      </div>
    </nav>
  )

  return currentUser ? (greeting()) : links();
  // do i need currentUser and logout?
}

export default Splash;
