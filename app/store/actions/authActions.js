/*
 * Reducer actions related with login
 */
import { types } from 'app/store/actions';

export default {
  login: payload => ({ type: types.LOGIN, payload }),

  successLogin: payload => ({
    type: types.LOGIN_SUCCESS,
    payload,
  }),

  failLogin: result => ({
    type: types.LOGIN_FAILED,
    payload: { result },
  }),

  register: payload => ({ type: types.REGISTER, payload }),
  successRegister: payload => ({
    type: types.REGISTER_SUCCESS,
    payload,
  }),
  failRegister: result => ({
    type: types.REGISTER_FAILED,
    payload: { result },
  }),

  logout: payload => ({ type: types.LOGOUT }),
};
