import { createLogic } from 'redux-logic';
import { authActions, modalActions } from '../actions';

// RSA - fix me
const onFail = createLogic({
  type: /.*_FAILED\b/,
  process(
    {
      action,
      action: {
        payload: {
          response,
          response: { data: { messages } = {} } = {},
        } = ({} = {}),
        payload,
      },
    },
    dispatch,
    done,
  ) {
    console.log({ response });
    if (response?.status === 401) {
      dispatch(
        modalActions.show({
          title: 'Oops..',
          body: 'Sesi habis! Silahkan login kembali',
        }),
      );
      dispatch(authActions.logout());
    } else {
      dispatch(modalActions.show({ title: 'Oops..', body: messages }));
    }
    done();
  },
});

export default [onFail];
