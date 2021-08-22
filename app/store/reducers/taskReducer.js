/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */
import createReducer from 'app/lib/createReducer';
import { types } from '../actions';
import persistReducer from 'redux-persist/es/persistReducer';
import AsyncStorage from '@react-native-community/async-storage';

const initialState = {
  isLoading: false,
  list: [],
  pagination: {
    per_page: 10,
    page: 1,
    current_page: 1,
  },
};

const setLoadingDone = state => ({ ...state, isLoading: false });

const reducer = createReducer(initialState, {
  [types.TASK_GET]: (state, { payload }) => ({
    ...state,
    ...initialState,
    isLoading: true,
  }),
  [types.TASK_GET_SUCCESS]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    list: payload.data,
  }),
});

const persistConfig = {
  key: 'taskReducer',
  blacklist: ['isLoading'],
  storage: AsyncStorage,
  version: 0,
};
export default persistReducer(persistConfig, reducer);
