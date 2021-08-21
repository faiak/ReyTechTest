/* Login Reducer
 * handles login states in the app
 */
import AsyncStorage from '@react-native-community/async-storage';
import createReducer from 'app/lib/createReducer';
import { types } from 'app/store/actions';
import persistReducer from 'redux-persist/es/persistReducer';

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  token: null,
};

const reducer = createReducer(initialState, {
  [types.LOGOUT]: state => ({
    ...state,
    isLoggedIn: false,
    token: null,
  }),
  [types.LOGIN]: (state, action) => {
    return {
      ...state,
      isLoading: true,
      isLoggedIn: false,
    };
  },
  [types.LOGIN_SUCCESS]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    isLoggedIn: true,
    token: payload?.token,
  }),
  [types.LOGIN_FAILED]: state => ({
    ...state,
    isLoading: false,
    isLoggedIn: false,
  }),
  [types.REGISTER]: state => ({ ...state, isLoading: true }),
  [types.REGISTER_SUCCESS]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    isLoggedIn: true,
    token: payload?.token,
  }),
  [types.REGISTER_FAILED]: state => ({ ...state, isLoading: false }),
});

const persistConfig = {
  key: 'authReducer',
  blacklist: ['isLoading'],
  storage: AsyncStorage,
  version: 0,
};
export default persistReducer(persistConfig, reducer);
