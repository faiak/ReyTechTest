/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */
import createReducer from 'app/lib/createReducer';
import { types } from '../actions';
import persistReducer from 'redux-persist/es/persistReducer';
import AsyncStorage from '@react-native-community/async-storage';

const initialState = {
  isLoginLoading: false,
  show: false,
  title: '',
  body: '',
};

const reducer = createReducer(initialState, {
  [types.MODAL_SHOW]: (state, { payload }) => ({
    ...state,
    show: true,
    title: payload?.title,
    body: payload?.body,
  }),
  [types.MODAL_HIDE]: (state, { payload }) => ({
    ...state,
    show: false,
    title: '',
    body: '',
  }),
});

const persistConfig = {
  key: 'modalReducer',
  blacklist: ['isLoading'],
  storage: AsyncStorage,
  version: 0,
};
export default persistReducer(persistConfig, reducer);
