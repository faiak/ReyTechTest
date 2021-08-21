// export action creators
import * as authActions from './authActions';
import * as taskAction from './taskAction';
import * as navigationActions from './navigationActions';
import * as themeActions from './themeActions';
import * as modalActions from './modalActions';

export { default as authActions } from './authActions';
export { default as taskAction } from './taskAction';
export { default as modalActions } from './modalActions';
export { default as types } from './types';

export const ActionCreators = Object.assign(
  {},
  authActions,
  taskAction,
  navigationActions,
  themeActions,
  modalActions,
);
