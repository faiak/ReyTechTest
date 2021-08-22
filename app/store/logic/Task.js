import { createLogic } from 'redux-logic';
import { types, taskActions } from 'app/store/actions';
import authentication from 'app/services/authentication';

const getTask = createLogic({
  type: types.TASK_GET,
  warnTimeout: 0,
  process(
    { getState, action, action: { payload: { email, password } = {} } },
    dispatch,
    done,
  ) {
    authentication
      .login({ email, password })
      .then(({ data: { data } = {} }) => {
        dispatch(taskActions.getSuccess({ token: data?.token }));
      })
      .catch(error => {
        dispatch(taskActions.getFailed(error));
      })
      .then(done);
  },
});

const createTask = createLogic({
  type: types.TASK_CREATE,
  warnTimeout: 0,
  latest: true,
  process({ getState, action, action: { payload } }, dispatch, done) {
    authentication
      .register(payload)
      .then(({ data: { data } = {} }) => {
        dispatch(taskActions.createSuccess({ token: data?.token }));
      })
      .catch(error => {
        dispatch(taskActions.createFailed(error));
      })
      .then(done);
  },
});

const deleteTask = createLogic({
  type: types.TASK_DELETE,
  warnTimeout: 0,
  latest: true,
  process({ getState, action, action: { payload } }, dispatch, done) {
    authentication
      .register(payload)
      .then(({ data: { data } = {} }) => {
        dispatch(taskActions.deleteSuccess({ token: data?.token }));
      })
      .catch(error => {
        dispatch(taskActions.deleteFailed(error));
      })
      .then(done);
  },
});

const completeTask = createLogic({
  type: types.TASK_COMPLETE,
  warnTimeout: 0,
  latest: true,
  process({ getState, action, action: { payload } }, dispatch, done) {
    authentication
      .register(payload)
      .then(({ data: { data } = {} }) => {
        dispatch(taskActions.completeSuccess({ token: data?.token }));
      })
      .catch(error => {
        dispatch(taskActions.completeFailed(error));
      })
      .then(done);
  },
});

export default [getTask, createTask, deleteTask, completeTask];
