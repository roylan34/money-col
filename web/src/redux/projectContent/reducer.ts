import Immutable from 'immutable';
import { RootStateOrAny } from 'react-redux';
import { AnyAction } from 'redux';

import {
  FETCH_RECOMMENDED_PROJECT_CONTENTS_REQUEST,
  FETCH_RECOMMENDED_PROJECT_CONTENTS_FAILURE,
  FETCH_RECOMMENDED_PROJECT_CONTENTS_SUCCESS,
  SET_RECOMMENDED_PROJECT_CONTENTS,
  SET_PROJECT_CONTENT_DATA,
  FETCH_LAST_BOUGHT_PROJECT_CONTENTS_FAILURE,
  FETCH_LAST_BOUGHT_PROJECT_CONTENTS_REQUEST,
  FETCH_LAST_BOUGHT_PROJECT_CONTENTS_SUCCESS,
  SET_LAST_BOUGHT_PROJECT_CONTENTS,
  FETCH_PROJECT_CONTENTS_FAILURE,
  FETCH_PROJECT_CONTENTS_REQUEST,
  FETCH_PROJECT_CONTENTS_SUCCESS,
} from './actionType';

export const initialState = {
  recommendedProjectContents: [],
  recentlyBought: [],
  projectContents: {},
  requests: {},
};

export type ProjectContentStore = typeof initialState;

export default (
  state: RootStateOrAny = initialState,
  action: AnyAction,
): object => {
  const { payload, type } = action;

  switch (type) {
    case SET_PROJECT_CONTENT_DATA:
      return Immutable.fromJS(state)
        .updateIn(['projectContents'], () => payload)
        .toJS();
    case SET_RECOMMENDED_PROJECT_CONTENTS:
      return Immutable.fromJS(state)
        .updateIn(['recommendedProjectContents'], () => payload)
        .toJS();
    case SET_LAST_BOUGHT_PROJECT_CONTENTS:
      return Immutable.fromJS(state)
        .updateIn(['recentlyBought'], () => payload)
        .toJS();
    case FETCH_RECOMMENDED_PROJECT_CONTENTS_REQUEST:
      return Immutable.fromJS(state)
        .updateIn(
          ['requests', FETCH_RECOMMENDED_PROJECT_CONTENTS_REQUEST, 'pending'],
          () => true,
        )
        .toJS();
    case FETCH_RECOMMENDED_PROJECT_CONTENTS_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', FETCH_RECOMMENDED_PROJECT_CONTENTS_REQUEST],
          () => payload.response,
        )
        .updateIn(
          ['requests', FETCH_RECOMMENDED_PROJECT_CONTENTS_REQUEST, 'pending'],
          () => false,
        )
        .toJS();
    case FETCH_RECOMMENDED_PROJECT_CONTENTS_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', FETCH_RECOMMENDED_PROJECT_CONTENTS_REQUEST],
          () => payload.error,
        )
        .updateIn(
          ['requests', FETCH_RECOMMENDED_PROJECT_CONTENTS_REQUEST, 'pending'],
          () => false,
        )
        .toJS();
    case FETCH_LAST_BOUGHT_PROJECT_CONTENTS_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', FETCH_LAST_BOUGHT_PROJECT_CONTENTS_REQUEST],
          () => payload.response,
        )
        .toJS();
    case FETCH_LAST_BOUGHT_PROJECT_CONTENTS_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', FETCH_LAST_BOUGHT_PROJECT_CONTENTS_REQUEST],
          () => payload.error,
        )
        .toJS();
    case FETCH_PROJECT_CONTENTS_REQUEST:
      return Immutable.fromJS(state)
        .updateIn(
          ['requests', FETCH_PROJECT_CONTENTS_REQUEST, 'pending'],
          () => true,
        )
        .toJS();
    case FETCH_PROJECT_CONTENTS_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', FETCH_PROJECT_CONTENTS_REQUEST],
          () => payload.response,
        )
        .updateIn(
          ['requests', FETCH_PROJECT_CONTENTS_REQUEST, 'pending'],
          () => false,
        )
        .toJS();
    case FETCH_PROJECT_CONTENTS_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', FETCH_PROJECT_CONTENTS_REQUEST],
          () => payload.error,
        )
        .updateIn(
          ['requests', FETCH_PROJECT_CONTENTS_REQUEST, 'pending'],
          () => false,
        )
        .toJS();
    default:
      return state;
  }
};
