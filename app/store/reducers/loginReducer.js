/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import { types } from 'app/store/actions';
const initialState = {
  isLoggedIn: false,
  id: 0,
  username: '',
  password: '',
  isLoading: false,
};

export const loginReducer = createReducer(initialState, {
  [types.LOGIN]: (state, action) => ({
    ...state,
    isLoading: true,
    isLoggedIn: false,
  }),
});
