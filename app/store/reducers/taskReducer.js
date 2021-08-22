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
  isLoadingComplete: false,
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
  [types.TASK_GET_FAILED]: (state, { payload }) => ({
    ...state,
    isLoading: false,
  }),

  [types.TASK_COMPLETE]: state => ({
    ...state,
    isLoadingComplete: true,
  }),
  [types.TASK_COMPLETE_SUCCESS]: (state, { payload }) => ({
    ...state,
    isLoadingComplete: false,
    list: state.list.map(({ meta, data }, index) => ({
      meta,
      data: data.map(task => ({
        ...task,
        is_complete:
          task.id === payload.data.id ? !task.is_complete : task.is_complete,
      })),
    })),
  }),
  [types.TASK_COMPLETE_FAILED]: state => ({
    ...state,
    isLoadingComplete: false,
  }),
});

const persistConfig = {
  key: 'taskReducer',
  blacklist: ['isLoading'],
  storage: AsyncStorage,
  version: 0,
};
export default persistReducer(persistConfig, reducer);
