import React from 'react';
import { Link } from 'react-router-dom';

const Splash = ({ currentUser, logout }) => {
  const links = () => (
    <nav className="login-signup">
      <Link to="/login">Login</Link>
      &nbsp;
      <Link to="/signup">Sign up</Link>
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
  
  return currentUser ? greeting() : links();
}

export default Splash;
