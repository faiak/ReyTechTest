// export action creators
import * as authActions from './authActions';
import * as taskActions from './taskActions';
import * as navigationActions from './navigationActions';
import * as themeActions from './themeActions';
import * as modalActions from './modalActions';

export { default as authActions } from './authActions';
export { default as taskActions } from './taskActions';
export { default as modalActions } from './modalActions';
export { default as types } from './types';

export const ActionCreators = Object.assign(
  {},
  authActions,
  taskActions,
  navigationActions,
  themeActions,
  modalActions,
);
