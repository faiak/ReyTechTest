// export action creators
import * as loginActions from './loginActions';
import * as navigationActions from './navigationActions';
import * as themeActions from './themeActions';

export { default as loginActions } from './loginActions';
export { default as types } from './types';

export const ActionCreators = Object.assign(
  {},
  loginActions,
  navigationActions,
  themeActions,
);
