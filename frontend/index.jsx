import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

// debugger

document.addEventListener('DOMContentLoaded', () => {
  // if (window.currentUser){
  // preloadedState looking like the state shape if i have a current user, with cu
  // }
  // debugger
  // const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Taskana</h1>, root);
});
