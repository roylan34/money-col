import { AnyAction } from 'redux';
import {
  ADD_MANUAL_REQUEST,
  ADD_MANUAL_FAILURE,
  ADD_MANUAL_SUCCESS,
  FETCH_MANUALS_REQUEST,
  FETCH_MANUALS_FAILURE,
  FETCH_MANUALS_SUCCESS,
  UPDATE_MANUAL_REQUEST,
  UPDATE_MANUAL_FAILURE,
  UPDATE_MANUAL_SUCCESS,
  DELETE_MANUALS_REQUEST,
  DELETE_MANUALS_FAILURE,
  DELETE_MANUALS_SUCCESS,
} from './actionType';
import { Manual } from '../../domain/entities';

export const addManual = (
  manualParams: {
    file: File;
    metadata?: object;
  },
  thumbnailParams: {
    file: File;
    metadata?: object;
  },
  params: {
    title: string;
    isPublished: boolean;
    tags: {
      primeContent: boolean;
      eliteContent: boolean;
      regularContent: boolean;
      [key: string]: boolean;
    };
  },
): AnyAction => ({
  type: ADD_MANUAL_REQUEST,
  payload: { manualParams, thumbnailParams, params },
});

export const addManualSuccess = (response: Object): AnyAction => ({
  type: ADD_MANUAL_SUCCESS,
  payload: { response },
});

export const addManualFailure = (error: Error | string): AnyAction => ({
  type: ADD_MANUAL_FAILURE,
  payload: { error },
});

export const fetchManuals = (query?: {
  where?: [string, '<' | '<=' | '==' | '>=' | '>', string | number | boolean][];
  limit?: number;
  page?: number;
  orderBy?: string;
  sort?: 'desc' | 'asc';
}): AnyAction => ({
  type: FETCH_MANUALS_REQUEST,
  payload: { query },
});

export const fetchManualsSuccess = (response: {
  manuals: { [key: string]: Manual };
  recommended: { [key: string]: Manual };
}): AnyAction => ({
  type: FETCH_MANUALS_SUCCESS,
  payload: { response },
});

export const fetchManualsFailure = (error: Error | string): AnyAction => ({
  type: FETCH_MANUALS_FAILURE,
  payload: { error },
});

export const updateManual = (
  id: string,
  params: {
    title: string;
    isPublished: boolean;
    tags: {
      primeContent: boolean;
      regularContent: boolean;
      eliteContent: boolean;
    };
  },
  thumbnailParams?: { file: File; metadata?: object },
): AnyAction => ({
  type: UPDATE_MANUAL_REQUEST,
  payload: { id, thumbnailParams, params },
});

export const updateManualSuccess = (response: Object): AnyAction => ({
  type: UPDATE_MANUAL_SUCCESS,
  payload: { response },
});

export const updateManualFailure = (error: Error | string): AnyAction => ({
  type: UPDATE_MANUAL_FAILURE,
  payload: { error },
});

export const deleteManuals = (ids: Array<string>): AnyAction => ({
  type: DELETE_MANUALS_REQUEST,
  payload: { ids },
});

export const deleteManualsSuccess = (response: Object): AnyAction => ({
  type: DELETE_MANUALS_SUCCESS,
  payload: { response },
});

export const deleteManualsFailure = (error: Error | string): AnyAction => ({
  type: DELETE_MANUALS_FAILURE,
  payload: { error },
});
