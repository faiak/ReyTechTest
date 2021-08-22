const { createSelector } = require('reselect');

const authReducer = state => state.authReducer;

export const getLoading = createSelector([authReducer], state => {
  return state.isLoading;
});

export default { getLoading };
