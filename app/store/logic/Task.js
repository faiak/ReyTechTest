import { createLogic } from 'redux-logic';
import { types, taskActions } from 'app/store/actions';
import task from 'app/services/task';
import { authSelectors } from '../selectors';
import NavigationService from 'app/navigation/NavigationService';
import { Alert } from 'react-native';

const buildHeaders = state => {
  return {
    headers: {
      Authorization: `Bearer ${authSelectors.getToken(state)}`,
    },
  };
};

const getTask = createLogic({
  type: types.TASK_GET,
  warnTimeout: 0,
  process(
    { getState, action, action: { payload: { search = '' } = {} } },
    dispatch,
    done,
  ) {
    task
      .get({
        ...buildHeaders(getState()),
        params: { 'pagination[perpage]': 999, 'like[title]': search },
      })
      .then(({ data: { data } = {} }) => {
        dispatch(taskActions.getSuccess({ data }));
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
    console.log({ payload });
    task
      .create(payload, { ...buildHeaders(getState()) })
      .then(({ data: { data } = {} }) => {
        dispatch(NavigationService.goBack());
        dispatch(taskActions.get());
        dispatch(taskActions.createSuccess({}));
        Alert.alert('Berhasil menambah task!');
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
    task
      .delete({ id: payload }, { ...buildHeaders(getState()) })
      .then(({ data: { data } = {} }) => {
        dispatch(taskActions.deleteSuccess({ id: payload }));
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
    task
      .complete({ id: payload }, { ...buildHeaders(getState()) })
      .then(({ data: { data } = {} }) => {
        dispatch(taskActions.completeSuccess({ data }));
      })
      .catch(error => {
        dispatch(taskActions.completeFailed(error));
      })
      .then(done);
  },
});

export default [getTask, createTask, deleteTask, completeTask];
