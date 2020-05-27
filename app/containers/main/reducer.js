/* eslint-disable */
/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { handleActions } from 'redux-actions';
import { clearErrorRibbon, setErrorRibbon } from './actions';

// The initial state of the Main
export const initialState = {
  errorMessages: null
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = handleActions({
  [clearErrorRibbon]: produce(draft => {
    draft.errorMessages = initialState.errorMessages;
    return draft;
  }),
  [setErrorRibbon]: produce((draft, action) => {
    draft.errorMessages = action.payload.message
    return draft;
  }),
}, initialState);

export default appReducer;
