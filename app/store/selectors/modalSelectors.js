const { createSelector } = require('reselect');

const modalReducer = state => state.modalReducer;
const allReducer = state => state;

export const get = createSelector([modalReducer], state => {
  return state;
});

export const getGlobal = createSelector([allReducer], state => {
  return state.taskReducer.isLoadingComplete;
});

export default { get, getGlobal };
