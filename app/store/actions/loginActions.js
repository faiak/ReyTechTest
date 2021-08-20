/*
 * Reducer actions related with login
 */
import { types } from 'app/store/actions';

export default {
  login: payload => ({ type: types.LOGIN, payload }),
};
