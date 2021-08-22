const { createSelector } = require('reselect');

const taskReducer = state => state.taskReducer;

export const getLoading = createSelector([taskReducer], state => {
  return state.isLoading;
});

export const getLoadingComplete = createSelector([taskReducer], state => {
  return state.isLoadingComplete;
});

export const getLoadingCreate = createSelector([taskReducer], state => {
  return state.isLoadingCreate;
});

export const getTask = createSelector([taskReducer], state => {
  return state.list.filter(item => item.data?.length > 0);
});

export default { getLoading, getTask, getLoadingComplete, getLoadingCreate };
