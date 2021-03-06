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
  isLoadingCreate: false,
  isLoadingFirst: true,
  list: [],
  pagination: {
    per_page: 10,
    page: 1,
    current_page: 1,
  },
  search: '',
};

const setLoadingDone = state => ({ ...state, isLoading: false });

const reducer = createReducer(initialState, {
  [types.LOGOUT]: state => ({
    ...initialState,
  }),
  [types.TASK_SEARCH]: (state, { payload }) => ({ ...state, search: payload }),
  [types.TASK_GET]: (state, { payload }) => ({
    ...state,
    isLoading: true,
    list: [],
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

  [types.TASK_DELETE]: state => ({
    ...state,
    isLoadingComplete: true,
  }),
  [types.TASK_DELETE_SUCCESS]: (state, { payload }) => ({
    ...state,
    isLoadingComplete: false,
    list: state.list.map(({ meta, data }, index) => ({
      meta,
      data: data.map(task =>
        task.id === payload.id ? { ...task, is_deleted: true } : task,
      ),
    })),
  }),
  [types.TASK_FORCE_DELETE]: (state, { payload }) => ({
    ...state,
    isLoadingComplete: false,
    list: state.list.map(({ meta, data }, index) => ({
      meta,
      data: data.filter(task => task.id !== payload.id),
    })),
  }),
  [types.TASK_DELETE_FAILED]: state => ({
    ...state,
    isLoadingComplete: false,
  }),

  [types.TASK_CREATE]: state => ({
    ...state,
    isLoadingCreate: true,
  }),
  [types.TASK_CREATE_SUCCESS]: (state, { payload }) => ({
    ...state,
    isLoadingCreate: false,
  }),
  [types.TASK_CREATE_FAILED]: state => ({
    ...state,
    isLoadingCreate: false,
  }),
});

const persistConfig = {
  key: 'taskReducer',
  blacklist: [
    'isLoading',
    'isLoadingFirst',
    'isLoadingComplete',
    'isLoadingCreate',
  ],
  storage: AsyncStorage,
  version: 0,
};
export default persistReducer(persistConfig, reducer);
