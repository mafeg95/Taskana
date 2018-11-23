import { combineReducers } from 'redux';
import modal from './modal_reducer';
import sidebar from './sidebar_reducer';
import creating from './selection_reducer';
import editing from './edit_reducer';
import dropdown from './dropdown_reducer';
import creatingT from './create_task_reducer';

export default combineReducers({
  modal,
  sidebar,
  creating,
  editing,
  dropdown,
  creatingT
});
