import { createActions } from 'redux-actions';

export const { setErrorRibbon, clearErrorRibbon } = createActions(
  'SET_ERROR_RIBBON',
  'CLEAR_ERROR_RIBBON',
);
