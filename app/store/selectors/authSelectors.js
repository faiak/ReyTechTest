const { createSelector } = require('reselect');

const authReducer = state => state.authReducer;

export const getLoading = createSelector([authReducer], state => {
  return state.isLoading;
});

export const getToken = createSelector([authReducer], state => {
  return state.token;
});

export default { getLoading, getToken };
