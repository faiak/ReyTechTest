/*
 * Reducer actions related with login
 */
import { types } from 'app/store/actions';

export default {
  show: payload => ({ type: types.MODAL_SHOW, payload }),
  hide: payload => ({ type: types.MODAL_HIDE, payload }),
};
