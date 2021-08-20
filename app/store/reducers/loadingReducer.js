/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */
import createReducer from 'app/lib/createReducer';

const initialState = {
  isLoginLoading: false,
};

export const loadingReducer = createReducer(initialState, {});
