/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */
import AsyncStorage from '@react-native-community/async-storage';
import createReducer from 'app/lib/createReducer';
import { types } from 'app/store/actions';
import persistReducer from 'redux-persist/es/persistReducer';

const initialState = {
  isDark: false,
};

const reducer = createReducer(initialState, {
  [types.TOGGLE_THEME]: (state, action) => {
    return { ...state, isDark: action.isDark };
  },
});

const persistConfig = {
  key: 'themeReducer',
  blacklist: ['isLoading'],
  storage: AsyncStorage,
  version: 0,
};
export default persistReducer(persistConfig, reducer);
