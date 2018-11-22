import { combineReducers } from 'redux';
import modal from './modal_reducer';
import sidebar from './sidebar_reducer';
import creating from './selection_reducer';
import editing from './edit_reducer';

export default combineReducers({
  modal,
  sidebar,
  creating,
  editing
});
