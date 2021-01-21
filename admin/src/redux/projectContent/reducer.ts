import Immutable from 'immutable';
import { RootStateOrAny } from 'react-redux';
import { AnyAction } from 'redux';

import {
  ADD_PROJECT_CONTENT_FAILURE,
  ADD_PROJECT_CONTENT_REQUEST,
  ADD_PROJECT_CONTENT_SUCCESS,
  FETCH_PROJECT_CONTENTS_REQUEST,
  FETCH_PROJECT_CONTENTS_FAILURE,
  FETCH_PROJECT_CONTENTS_SUCCESS,
  UPDATE_PROJECT_CONTENT_REQUEST,
  UPDATE_PROJECT_CONTENT_FAILURE,
  UPDATE_PROJECT_CONTENT_SUCCESS,
  DELETE_PROJECT_CONTENTS_REQUEST,
  DELETE_PROJECT_CONTENTS_FAILURE,
  DELETE_PROJECT_CONTENTS_SUCCESS,
} from './actionType';
import { ProjectContent } from '../../domain/entities';

export const initialState = {
  failedRequests: {},
  successfulRequests: {},
  projectContents: {},
  recommended: {},
  hasNextPage: false,
  hasPrevPage: false,
};

export type ProjectContentStore = typeof initialState;

export default (
  state: RootStateOrAny = initialState,
  action: AnyAction,
): object => {
  const { payload, type } = action;

  switch (type) {
    case ADD_PROJECT_CONTENT_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', ADD_PROJECT_CONTENT_REQUEST],
          () => payload.response,
        )
        .updateIn(['projectContents'], () => ({
          ...state.projectContents,
          ...payload.response.projectContents,
        }))
        .updateIn(['recommended'], () => ({
          ...state.recommended,
          ...payload.response.recommended,
        }))
        .toJS();
    case ADD_PROJECT_CONTENT_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', ADD_PROJECT_CONTENT_REQUEST],
          () => payload.error,
        )
        .toJS();
    case FETCH_PROJECT_CONTENTS_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', FETCH_PROJECT_CONTENTS_REQUEST],
          () => payload.response,
        )
        .updateIn(['projectContents'], () => payload.response.projectContents)
        .updateIn(['recommended'], () => payload.response.recommended)
        .updateIn(['hasNextPage'], () => payload.response.hasNextPage)
        .updateIn(['hasPrevPage'], () => payload.response.hasPrevPage)
        .toJS();
    case FETCH_PROJECT_CONTENTS_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', FETCH_PROJECT_CONTENTS_REQUEST],
          () => payload.error,
        )
        .toJS();
    case UPDATE_PROJECT_CONTENT_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', UPDATE_PROJECT_CONTENT_REQUEST],
          () => payload.response,
        )
        .updateIn(['projectContents'], () => ({
          ...state.projectContents,
          ...payload.response.projectContents,
        }))
        .updateIn(['recommended'], () => payload.response.recommended)
        .toJS();
    case UPDATE_PROJECT_CONTENT_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', UPDATE_PROJECT_CONTENT_REQUEST],
          () => payload.error,
        )
        .toJS();
    case DELETE_PROJECT_CONTENTS_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', DELETE_PROJECT_CONTENTS_REQUEST],
          () => payload.response,
        )
        .updateIn(['projectContents'], () => {
          const ids = payload.response as Array<string>;
          let projectContents = Object.assign({}, state.projectContents);

          ids.forEach(id => {
            const { [id]: omit, ...rest } = projectContents;
            projectContents = rest;
          });
          return projectContents;
        })
        .updateIn(['recommended'], () => {
          const ids = payload.response as Array<string>;
          let recommended = Object.assign({}, state.recommended) as {
            [key: string]: ProjectContent;
          };

          Object.values(recommended).forEach((value, index) => {
            const projectContent = value as ProjectContent;
            if (ids.indexOf(projectContent.id) >= 0) {
              const { [index]: omit, ...rest } = recommended;
              recommended = rest;
            }
          });

          return recommended;
        })
        .toJS();
    case DELETE_PROJECT_CONTENTS_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', DELETE_PROJECT_CONTENTS_REQUEST],
          () => payload.error,
        )
        .toJS();
    default:
      return state;
  }
};
