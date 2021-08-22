import { createLogic } from 'redux-logic';
import { modalActions } from '../actions';

// RSA - fix me
const onFail = createLogic({
  type: /.*_FAILED\b/,
  process(
    {
      action,
      action: {
        payload: { response: { data: { messages } = {} } = {} } = ({} = {}),
        payload,
      },
    },
    dispatch,
    done,
  ) {
    dispatch(modalActions.show({ title: 'Oops..', body: messages }));
    done();
  },
});

export default [onFail];
