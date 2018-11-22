export const OPEN_NAV = 'OPEN_NAV';
export const CLOSE_NAV = 'CLOSE_NAV';
export const DESELECT_NEW = 'DESELECT_NEW';
export const SELECT_NEW = 'SELECT_NEW';
export const OPEN_DROPDOWN = 'OPEN_DROPDOWN';
export const CLOSE_DROPDOWN = 'CLOSE_DROPDOWN';
export const DESELECT_EDIT = 'DESELECT_EDIT';
export const SELECT_EDIT = 'SELECT_EDIT';

export const openNav = () => {
  return {
    type: OPEN_NAV,
    sidebar: true
  };
};

export const closeNav = () => {

  return {
    type: CLOSE_NAV,
    sidebar: false
  };
};

export const deselectNewColumn = () => {
  return {
    type: DESELECT_NEW,
    creating: false
  };
};

export const selectNewColumn = () => {
  return {
    type: SELECT_NEW,
    creating: true
  };
};

export const openDropdown = () => {
  return {
    type: OPEN_DROPDOWN,
    dropdown: true
  };
};

export const closeDropdown = () => {
  return {
    type: CLOSE_DROPDOWN,
    dropdown: true
  };
};

export const selectEdit = () => {
  return {
    type: SELECT_EDIT,
    editing: true
  };
};

export const deselectEdit = () => {
  return {
    type: DESELECT_EDIT,
    editing: false
  };
};
