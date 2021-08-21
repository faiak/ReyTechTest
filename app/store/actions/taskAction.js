/*
 * Reducer actions related with login
 */
import { types } from 'app/store/actions';

export default {
  get: payload => ({ type: types.TASK_GET, payload }),
  create: payload => ({ type: types.TASK_CREATE, payload }),
  delete: payload => ({ type: types.TASK_DELETE, payload }),
  complete: payload => ({ type: types.TASK_COMPLETE, payload }),
};
