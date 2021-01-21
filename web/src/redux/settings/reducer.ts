import Immutable from 'immutable';
import { RootStateOrAny } from 'react-redux';
import { AnyAction } from 'redux';

import {
  FETCH_PRICE_MAP_REQUEST,
  FETCH_PRICE_MAP_SUCCESS,
  FETCH_PRICE_MAP_FAILURE,
  SET_PRICE_MAP,
} from './actionType';

export const initialState = {
  priceMapOfPoints: {},
  successfulRequests: {},
  failedRequests: {},
};

export type SettingsStore = typeof initialState;

export default (
  state: RootStateOrAny = initialState,
  action: AnyAction,
): object => {
  const { payload, type } = action;

  switch (type) {
    case SET_PRICE_MAP:
      return Immutable.fromJS(state)
        .mergeDeep(state, payload)
        .toJS();
    case FETCH_PRICE_MAP_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', FETCH_PRICE_MAP_REQUEST],
          () => payload.response,
        )
        .toJS();
    case FETCH_PRICE_MAP_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', FETCH_PRICE_MAP_REQUEST],
          () => payload.error,
        )
        .toJS();

    default:
      return state;
  }
};
