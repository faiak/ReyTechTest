/*
 * combines all th existing reducers
 */
import modalReducer from './modalReducer';
import authReducer from './authReducer';
import themeReducer from './themeReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  authReducer: authReducer,
  modalReducer: modalReducer,
  themeReducer: themeReducer,
});

// export default Object.assign(authReducer, modalReducer, themeReducer);
