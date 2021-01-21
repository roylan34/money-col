import { AnyAction } from 'redux';
import {
  ADD_EA_PROGRAM_REQUEST,
  ADD_EA_PROGRAM_FAILURE,
  ADD_EA_PROGRAM_SUCCESS,
  FETCH_EA_PROGRAMS_REQUEST,
  FETCH_EA_PROGRAMS_FAILURE,
  FETCH_EA_PROGRAMS_SUCCESS,
  UPDATE_EA_PROGRAM_REQUEST,
  UPDATE_EA_PROGRAM_FAILURE,
  UPDATE_EA_PROGRAM_SUCCESS,
  DELETE_EA_PROGRAMS_REQUEST,
  DELETE_EA_PROGRAMS_FAILURE,
  DELETE_EA_PROGRAMS_SUCCESS,
} from './actionType';
import { EAProgram } from '../../domain/entities';

export const addEAProgram = (
  eaProgramParams: {
    file: File;
    metadata?: object;
  },
  thumbnailParams: {
    file: File;
    metadata?: object;
  },
  params: {
    title: string;
    description: string;
    points: number;
    isPublished: boolean;
    tags: {
      showOnMyPage: boolean;
      primeContent: boolean;
      eliteContent: boolean;
      regularContent: boolean;
      [key: string]: boolean;
    };
    recommendedListIndex: number | null;
  },
  recommendedIds?: { [key: string]: string },
): AnyAction => ({
  type: ADD_EA_PROGRAM_REQUEST,
  payload: { eaProgramParams, thumbnailParams, params, recommendedIds },
});

export const addEAProgramSuccess = (response: Object): AnyAction => ({
  type: ADD_EA_PROGRAM_SUCCESS,
  payload: { response },
});

export const addEAProgramFailure = (error: Error | string): AnyAction => ({
  type: ADD_EA_PROGRAM_FAILURE,
  payload: { error },
});

export const fetchEAPrograms = (query?: {
  where?: [string, '<' | '<=' | '==' | '>=' | '>', string | number | boolean][];
  limit?: number;
  page?: number;
  orderBy?: string;
  sort?: 'desc' | 'asc';
}): AnyAction => ({
  type: FETCH_EA_PROGRAMS_REQUEST,
  payload: { query },
});

export const fetchEAProgramsSuccess = (response: {
  eaPrograms: { [key: string]: EAProgram };
  recommended: { [key: string]: EAProgram };
}): AnyAction => ({
  type: FETCH_EA_PROGRAMS_SUCCESS,
  payload: { response },
});

export const fetchEAProgramsFailure = (error: Error | string): AnyAction => ({
  type: FETCH_EA_PROGRAMS_FAILURE,
  payload: { error },
});

export const updateEAProgram = (
  id: string,
  params: {
    title: string;
    description: string;
    points: number;
    isPublished: boolean;
    tags: {
      showOnMyPage: boolean;
      primeContent: boolean;
      eliteContent: boolean;
      regularContent: boolean;
      [key: string]: boolean;
    };
    recommendedListIndex: number | null;
  },
  thumbnailParams?: {
    file: File;
    metadata?: object;
  },
  recommendedIds?: { [key: string]: string },
): AnyAction => ({
  type: UPDATE_EA_PROGRAM_REQUEST,
  payload: { id, thumbnailParams, params, recommendedIds },
});

export const updateEAProgramSuccess = (response: Object): AnyAction => ({
  type: UPDATE_EA_PROGRAM_SUCCESS,
  payload: { response },
});

export const updateEAProgramFailure = (error: Error | string): AnyAction => ({
  type: UPDATE_EA_PROGRAM_FAILURE,
  payload: { error },
});

export const deleteEAPrograms = (ids: Array<string>): AnyAction => ({
  type: DELETE_EA_PROGRAMS_REQUEST,
  payload: { ids },
});

export const deleteEAProgramsSuccess = (response: Object): AnyAction => ({
  type: DELETE_EA_PROGRAMS_SUCCESS,
  payload: { response },
});

export const deleteEAProgramsFailure = (error: Error | string): AnyAction => ({
  type: DELETE_EA_PROGRAMS_FAILURE,
  payload: { error },
});
