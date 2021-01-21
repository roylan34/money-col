import Immutable from 'immutable';
import { RootStateOrAny } from 'react-redux';
import { AnyAction } from 'redux';
import {
  ADD_GIVEAWAY_FAILURE,
  ADD_GIVEAWAY_REQUEST,
  ADD_GIVEAWAY_SUCCESS,
} from './actionType';

export const initialState = {
  requests: {},
};

export type SubscriberStore = typeof initialState;

export default (
  state: RootStateOrAny = initialState,
  action: AnyAction,
): object => {
  const { payload, type } = action;

  switch (type) {
    case ADD_GIVEAWAY_REQUEST:
      return Immutable.fromJS(state)
        .updateIn(['requests'], () => ({
          pending: true,
          success: false,
          error: null,
        }))
        .toJS();
    case ADD_GIVEAWAY_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(['requests'], () => ({
          pending: false,
          success: true,
          error: null,
          id: payload.response.id,
          message: payload.response.message,
        }))
        .toJS();
    case ADD_GIVEAWAY_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(['requests'], () => ({
          pending: false,
          success: false,
          error: payload.error,
        }))
        .toJS();

    default:
      return state;
  }
};
