import { createLogic } from 'redux-logic';
import { types } from 'app/store/actions';

const doLogin = createLogic({
  type: types.LOGIN,
  warnTimeout: 0,
  process({ getState, action, action: { payload } }, dispatch, done) {
    const state = getState();
    console.log('LOGIN LOGIC CALLED');
    done();
  },
});

export default [doLogin];
