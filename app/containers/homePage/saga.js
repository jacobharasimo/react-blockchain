import { takeLatest, put, call } from 'redux-saga/effects';
import {
  clearWatchList,
  errorSymbolDetails,
  loadedSymbolDetails,
  loadSymbolDetails,
  loadSymbolChoices,
  loadedSymbolChoices,
  errorSymbolChoices,
} from './actions';

import { Config } from '../../utils/config';
import request from '../../utils/request';

/**
 * Root saga manages watcher lifecycle
 */

function* symbolDetailsEvent({ payload }) {
  const requestUrl = `${Config.baseApi}/quotes`;
  try {
    const { symbols } = payload;
    const results = yield call(
      request,
      `${requestUrl}?id=${encodeURIComponent(symbols)}`,
    );
    yield put(loadedSymbolDetails({ symbol: results.data }));
  } catch (err) {
    yield put(errorSymbolDetails(err));
  }
}

function* symbolChoicesEvent() {
  const requestUrl = `${Config.baseApi}/map`;
  try {
    yield put(clearWatchList());
    const results = yield call(request, requestUrl);
    yield put(loadedSymbolChoices({ choices: results.data }));
    const initResults = results.data.map(item => item.id);
    yield put(loadSymbolDetails({ symbols: initResults.slice(0, 5) }));
  } catch (err) {
    yield put(errorSymbolChoices(err));
  }
}

export default function* LoadHomeSaga() {
  yield takeLatest(loadSymbolDetails().type, symbolDetailsEvent);
  yield takeLatest(loadSymbolChoices().type, symbolChoicesEvent);
}
