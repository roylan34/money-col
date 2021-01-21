import Immutable from 'immutable';
import { RootStateOrAny } from 'react-redux';
import { AnyAction } from 'redux';
import {
  FETCH_SUBSCRIBERS_FAILURE,
  FETCH_SUBSCRIBERS_REQUEST,
  FETCH_SUBSCRIBERS_SUCCESS,
  FETCH_PURCHASE_FAILURE,
  FETCH_PURCHASE_REQUEST,
  FETCH_PURCHASE_SUCCESS,
  UPDATE_SUBSCRIBER_REQUEST,
  UPDATE_SUBSCRIBER_SUCCESS,
  UPDATE_SUBSCRIBER_FAILURE,
} from './actionType';

export const initialState = {
  subscribers: {},
  purchases: {},
  hasNextPage: false,
  hasPrevPage: false,
  requests: {},
};

export type SubscriberStore = typeof initialState;

export default (
  state: RootStateOrAny = initialState,
  action: AnyAction,
): object => {
  const { payload, type } = action;

  switch (type) {
    case FETCH_SUBSCRIBERS_REQUEST:
      return Immutable.fromJS(state)
        .updateIn(
          ['requests', FETCH_SUBSCRIBERS_REQUEST, 'isSending'],
          () => true,
        )
        .updateIn(['hasNextPage'], () => false)
        .updateIn(['hasPrevPage'], () => false)
        .toJS();
    case FETCH_SUBSCRIBERS_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', FETCH_SUBSCRIBERS_REQUEST],
          () => payload.response,
        )
        .updateIn(['subscribers'], () => payload.response.subscribers)
        .updateIn(['hasNextPage'], () => payload.response.hasNextPage)
        .updateIn(['hasPrevPage'], () => payload.response.hasPrevPage)
        .updateIn(
          ['requests', FETCH_SUBSCRIBERS_REQUEST, 'isSending'],
          () => false,
        )
        .toJS();
    case FETCH_SUBSCRIBERS_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', FETCH_SUBSCRIBERS_REQUEST],
          () => payload.error,
        )
        .updateIn(
          ['requests', FETCH_SUBSCRIBERS_REQUEST, 'isSending'],
          () => false,
        )
        .toJS();
    case FETCH_PURCHASE_REQUEST:
      return Immutable.fromJS(state)
        .updateIn(['requests', FETCH_PURCHASE_REQUEST, 'isSending'], () => true)
        .updateIn(['hasNextPage'], () => false)
        .updateIn(['hasPrevPage'], () => false)
        .toJS();
    case FETCH_PURCHASE_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', FETCH_PURCHASE_REQUEST],
          () => payload.response,
        )
        .updateIn(['purchases'], () => payload.response.purchases)
        .updateIn(['hasNextPage'], () => payload.response.hasNextPage)
        .updateIn(['hasPrevPage'], () => payload.response.hasPrevPage)
        .updateIn(
          ['requests', FETCH_PURCHASE_REQUEST, 'isSending'],
          () => false,
        )
        .toJS();
    case FETCH_PURCHASE_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', FETCH_PURCHASE_REQUEST],
          () => payload.error,
        )
        .updateIn(
          ['requests', FETCH_PURCHASE_REQUEST, 'isSending'],
          () => false,
        )
        .toJS();
    case UPDATE_SUBSCRIBER_REQUEST:
      return Immutable.fromJS(state)
        .updateIn(
          ['requests', UPDATE_SUBSCRIBER_REQUEST, 'isSending'],
          () => true,
        )
        .updateIn(['hasNextPage'], () => false)
        .updateIn(['hasPrevPage'], () => false)
        .toJS();
    case UPDATE_SUBSCRIBER_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', UPDATE_SUBSCRIBER_REQUEST],
          () => payload.response,
        )
        .updateIn(['subscribers'], () => payload.response)
        .updateIn(
          ['requests', UPDATE_SUBSCRIBER_REQUEST, 'isSending'],
          () => false,
        )
        .toJS();
    case UPDATE_SUBSCRIBER_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', UPDATE_SUBSCRIBER_REQUEST],
          () => payload.error,
        )
        .updateIn(
          ['requests', UPDATE_SUBSCRIBER_REQUEST, 'isSending'],
          () => false,
        )
        .toJS();
    default:
      return state;
  }
};
