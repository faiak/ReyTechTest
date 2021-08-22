import { createLogic } from 'redux-logic';
import { types, authActions } from 'app/store/actions';
import authentication from 'app/services/authentication';

const doLogin = createLogic({
  type: types.LOGIN,
  warnTimeout: 0,
  process(
    { getState, action, action: { payload: { email, password } = {} } },
    dispatch,
    done,
  ) {
    authentication
      .login({ email, password })
      .then(({ data: { data } = {} }) => {
        dispatch(authActions.loginSuccess({ token: data?.token }));
      })
      .catch(error => {
        dispatch(authActions.loginFailed(error));
      })
      .then(done);
  },
});

const doRegister = createLogic({
  type: types.REGISTER,
  warnTimeout: 0,
  latest: true,
  process({ getState, action, action: { payload } }, dispatch, done) {
    authentication
      .register(payload)
      .then(({ data: { data } = {} }) => {
        dispatch(authActions.registerSuccess({ token: data?.token }));
      })
      .catch(error => {
        dispatch(authActions.registerFailed(error));
      })
      .then(done);
  },
});

export default [doLogin, doRegister];
