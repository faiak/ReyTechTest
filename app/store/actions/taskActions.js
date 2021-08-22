/*
 * Reducer actions related with login
 */
import { types } from 'app/store/actions';

export default {
  search: payload => ({ type: types.TASK_SEARCH, payload }),

  get: payload => ({ type: types.TASK_GET, payload }),
  getSuccess: payload => ({ type: types.TASK_GET_SUCCESS, payload }),
  getFailed: payload => ({ type: types.TASK_GET_FAILED, payload }),

  create: payload => ({ type: types.TASK_CREATE, payload }),
  createSuccess: payload => ({ type: types.TASK_CREATE_SUCCESS, payload }),
  createFailed: payload => ({ type: types.TASK_CREATE_FAILED, payload }),

  delete: payload => ({ type: types.TASK_DELETE, payload }),
  deleteSuccess: payload => ({ type: types.TASK_DELETE_SUCCESS, payload }),
  deleteFailed: payload => ({ type: types.TASK_DELETE_FAILED, payload }),
  deleteForce: payload => ({ type: types.TASK_FORCE_DELETE, payload }),

  complete: payload => ({ type: types.TASK_COMPLETE, payload }),
  completeSuccess: payload => ({ type: types.TASK_COMPLETE_SUCCESS, payload }),
  completeFailed: payload => ({ type: types.TASK_COMPLETE_FAILED, payload }),
};
