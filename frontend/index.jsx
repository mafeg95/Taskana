import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  // if (window.currentUser){
  // preloadedState looking like the state shape if i have a current user, with cu
  // }
  //
  const store = configureStore();
  //Testing
  
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //Testing end
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
