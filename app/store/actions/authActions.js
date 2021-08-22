/*
 * Reducer actions related with login
 */
import { types } from 'app/store/actions';

export default {
  login: payload => ({ type: types.LOGIN, payload }),
  loginSuccess: payload => ({
    type: types.LOGIN_SUCCESS,
    payload,
  }),
  loginFailed: payload => ({
    type: types.LOGIN_FAILED,
    payload,
  }),
  register: payload => ({ type: types.REGISTER, payload }),
  registerSuccess: payload => ({
    type: types.REGISTER_SUCCESS,
    payload,
  }),
  registerFailed: payload => ({
    type: types.REGISTER_FAILED,
    payload,
  }),
  logout: () => ({ type: types.LOGOUT }),
};
