import Immutable from 'immutable';
import { RootStateOrAny } from 'react-redux';
import { AnyAction } from 'redux';

import {
  SET_USER,
  CLEAR_USER,
  UPDATE_USER_FAILURE,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_REQUEST,
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
  FETCH_USER_REQUEST,
  FETCH_INSTRUCTORS_FAILURE,
  FETCH_INSTRUCTORS_REQUEST,
  FETCH_INSTRUCTORS_SUCCESS,
  ADD_CARD_REQUEST,
  ADD_CARD_SUCCESS,
  ADD_CARD_FAILURE,
  DELETE_CARD_REQUEST,
  DELETE_CARD_SUCCESS,
  DELETE_CARD_FAILURE,
  PURCHASE_CONTENT_REQUEST,
  PURCHASE_CONTENT_SUCCESS,
  PURCHASE_CONTENT_FAILURE,
  DISMISS_USER_REQUESTS,
  PURCHASE_POINTS_CARD_REQUEST,
  PURCHASE_POINTS_CARD_SUCCESS,
  PURCHASE_POINTS_CARD_FAILURE,
  SET_LAST_LOG_IN_FAILURE,
  SET_LAST_LOG_IN_REQUEST,
  SET_LAST_LOG_IN_SUCCESS,
  CLAIM_GIVEAWAYS_REQUEST,
  CLAIM_GIVEAWAYS_SUCCESS,
  CLAIM_GIVEAWAYS_FAILURE,
  PURCHASE_POINTS_PAYPAL_REQUEST,
  PURCHASE_POINTS_PAYPAL_SUCCESS,
  PURCHASE_POINTS_PAYPAL_FAILURE,
  UPDATE_MAILBOX_SETTINGS_REQUEST,
  UPDATE_MAILBOX_SETTINGS_SUCCESS,
  UPDATE_MAILBOX_SETTINGS_FAILURE,
} from './actionType';

export const initialState = {
  name: {
    firstName: '',
    lastName: '',
  },
  id: '',
  photoURL: '',
  email: '',
  roles: {
    lecturer: false,
    subscriber: false,
    admin: false,
  },
  subscriberProfile: {
    rank: {
      score: 0,
      title: '',
    },
    hasUnreadMessage: false,
    points: 0,
    recentlyBought: {
      videoLectures: [],
      manuals: [],
    },
    lastGiveawayClaimDate: null,
  },
  stripe: {
    customerId: '',
    card: {
      cardId: '',
      brand: undefined,
      last4: '',
    },
  },
  mailBoxNotifSettings: {
    displaySendConfirmation: '',
    notifyRepliesWithEmail: '',
  },
  createdAt: {},
  updatedAt: {},
  instructors: [],
  successfulRequests: {},
  failedRequests: {},
  requests: {},
};

export type UserStore = typeof initialState;

export default (
  state: RootStateOrAny = initialState,
  action: AnyAction,
): object => {
  const { payload, type } = action;

  switch (type) {
    case SET_USER:
      return Immutable.fromJS(state)
        .mergeDeep(state, payload)
        .toJS();
    case CLEAR_USER:
      return Immutable.fromJS(state)
        .merge(state, initialState)
        .toJS();
    case FETCH_USER_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', FETCH_USER_REQUEST],
          () => payload.response,
        )
        .toJS();
    case FETCH_USER_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(['failedRequests', FETCH_USER_REQUEST], () => payload.error)
        .toJS();
    case UPDATE_USER_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', UPDATE_USER_REQUEST],
          () => payload.response,
        )
        .toJS();
    case UPDATE_USER_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(['failedRequests', UPDATE_USER_REQUEST], () => payload.error)
        .toJS();
    case FETCH_INSTRUCTORS_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', FETCH_INSTRUCTORS_REQUEST],
          () => payload.response,
        )
        .updateIn(['instructors'], () => payload.response)
        .toJS();
    case FETCH_INSTRUCTORS_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', FETCH_INSTRUCTORS_REQUEST],
          () => payload.error,
        )
        .toJS();

    case ADD_CARD_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', ADD_CARD_REQUEST],
          () => payload.response,
        )
        .toJS();
    case ADD_CARD_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(['failedRequests', ADD_CARD_REQUEST], () => payload.error)
        .toJS();
    case DELETE_CARD_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', DELETE_CARD_REQUEST],
          () => payload.response,
        )
        .toJS();
    case DELETE_CARD_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(['failedRequests', DELETE_CARD_REQUEST], () => payload.error)
        .toJS();
    case PURCHASE_CONTENT_REQUEST:
      return Immutable.fromJS(state)
        .updateIn(['requests', PURCHASE_CONTENT_REQUEST, 'pending'], () => true)
        .toJS();
    case PURCHASE_CONTENT_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['subscriberProfile'],
          () => payload.response.user.subscriberProfile,
        )
        .updateIn(
          ['successfulRequests', PURCHASE_CONTENT_REQUEST],
          () => payload.response,
        )
        .updateIn(
          ['requests', PURCHASE_CONTENT_REQUEST, 'pending'],
          () => false,
        )
        .toJS();
    case PURCHASE_CONTENT_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', PURCHASE_CONTENT_REQUEST],
          () => payload.error,
        )
        .updateIn(
          ['requests', PURCHASE_CONTENT_REQUEST, 'pending'],
          () => false,
        )
        .toJS();
    case DISMISS_USER_REQUESTS:
      return Immutable.fromJS(state)
        .updateIn(['successfulRequests'], () =>
          Immutable.remove(state.successfulRequests, payload.actionType),
        )
        .toJS();

    case PURCHASE_POINTS_CARD_REQUEST:
      return Immutable.fromJS(state)
        .updateIn(
          ['requests', PURCHASE_POINTS_CARD_REQUEST, 'pending'],
          () => true,
        )
        .toJS();

    case PURCHASE_POINTS_CARD_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', PURCHASE_POINTS_CARD_REQUEST],
          () => payload.response,
        )
        .updateIn(
          ['requests', PURCHASE_POINTS_CARD_REQUEST, 'pending'],
          () => false,
        )
        .toJS();
    case PURCHASE_POINTS_CARD_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', PURCHASE_POINTS_CARD_REQUEST],
          () => payload.error,
        )
        .updateIn(
          ['requests', PURCHASE_POINTS_CARD_REQUEST, 'pending'],
          () => false,
        )
        .toJS();

    case SET_LAST_LOG_IN_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', SET_LAST_LOG_IN_REQUEST],
          () => payload.response,
        )
        .toJS();

    case SET_LAST_LOG_IN_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', SET_LAST_LOG_IN_REQUEST],
          () => payload.error,
        )
        .toJS();

    case CLAIM_GIVEAWAYS_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', CLAIM_GIVEAWAYS_REQUEST],
          () => payload.response,
        )
        .toJS();

    case CLAIM_GIVEAWAYS_FAILURE:
      return Immutable.fromJS(state).updateIn(
        ['failedRequests', CLAIM_GIVEAWAYS_REQUEST],
        () => payload.error,
      );
    case PURCHASE_POINTS_PAYPAL_REQUEST:
      return Immutable.fromJS(state)
        .updateIn(
          ['requests', PURCHASE_POINTS_PAYPAL_REQUEST, 'pending'],
          () => true,
        )
        .toJS();

    case PURCHASE_POINTS_PAYPAL_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', PURCHASE_POINTS_PAYPAL_REQUEST],
          () => payload.response,
        )
        .updateIn(
          ['requests', PURCHASE_POINTS_PAYPAL_REQUEST, 'pending'],
          () => false,
        )
        .toJS();
    case PURCHASE_POINTS_PAYPAL_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', PURCHASE_POINTS_PAYPAL_REQUEST],
          () => payload.error,
        )
        .updateIn(
          ['requests', PURCHASE_POINTS_PAYPAL_REQUEST, 'pending'],
          () => false,
        )
        .toJS();

    case UPDATE_MAILBOX_SETTINGS_REQUEST:
      return Immutable.fromJS(state)
        .updateIn(
          ['requests', UPDATE_MAILBOX_SETTINGS_REQUEST, 'pending'],
          () => true,
        )
        .toJS();
    case UPDATE_MAILBOX_SETTINGS_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', UPDATE_MAILBOX_SETTINGS_REQUEST],
          () => payload.response,
        )
        .updateIn(
          ['requests', UPDATE_MAILBOX_SETTINGS_REQUEST, 'pending'],
          () => false,
        )
        .toJS();
    case UPDATE_MAILBOX_SETTINGS_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', UPDATE_MAILBOX_SETTINGS_REQUEST],
          () => payload.error,
        )
        .updateIn(
          ['requests', UPDATE_MAILBOX_SETTINGS_REQUEST, 'pending'],
          () => false,
        )
        .toJS();

    default:
      return state;
  }
};
