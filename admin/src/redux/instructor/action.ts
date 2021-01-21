import { AnyAction } from 'redux';
import {
  FETCH_INSTRUCTORS_REQUEST,
  FETCH_INSTRUCTORS_SUCCESS,
  FETCH_INSTRUCTORS_FAILURE,
  CREATE_INSTRUCTOR_FAILURE,
  CREATE_INSTRUCTOR_REQUEST,
  CREATE_INSTRUCTOR_SUCCESS,
  DELETE_INSTRUCTORS_REQUEST,
  DELETE_INSTRUCTORS_SUCCESS,
  DELETE_INSTRUCTORS_FAILURE,
  UPDATE_INSTRUCTOR_FAILURE,
  UPDATE_INSTRUCTOR_REQUEST,
  UPDATE_INSTRUCTOR_SUCCESS,
} from './actionType';
import { Instructor } from '../../domain/entities';

export const fetchInstructors = (query?: {
  where?: [string, '<' | '<=' | '==' | '>=' | '>', string | number | boolean][];
  limit?: number;
  page?: number;
  orderBy?: string;
  sort?: 'desc' | 'asc';
}): AnyAction => ({
  type: FETCH_INSTRUCTORS_REQUEST,
  payload: { query },
});

export const fetchInstructorsSuccess = (response: {
  instructors: { [key: string]: Instructor };
}): AnyAction => ({
  type: FETCH_INSTRUCTORS_SUCCESS,
  payload: { response },
});

export const fetchInstructorsFailure = (error: Error | string): AnyAction => ({
  type: FETCH_INSTRUCTORS_FAILURE,
  payload: { error },
});

export const createInstructor = (params: {
  lastName: string;
  firstName: string;
  email: string;
}): AnyAction => ({
  type: CREATE_INSTRUCTOR_REQUEST,
  payload: { params },
});

export const createInstructorSuccess = (response: {
  instructors: { [key: string]: Instructor };
}): AnyAction => ({
  type: CREATE_INSTRUCTOR_SUCCESS,
  payload: { response },
});

export const createInstructorFailure = (error: Error | string): AnyAction => ({
  type: CREATE_INSTRUCTOR_FAILURE,
  payload: { error },
});

export const deleteInstructors = (ids: Array<string>): AnyAction => ({
  type: DELETE_INSTRUCTORS_REQUEST,
  payload: { ids },
});

export const deleteInstructorsSuccess = (response: Object): AnyAction => ({
  type: DELETE_INSTRUCTORS_SUCCESS,
  payload: { response },
});

export const deleteInstructorsFailure = (error: Error | string): AnyAction => ({
  type: DELETE_INSTRUCTORS_FAILURE,
  payload: { error },
});

export const updateInstructor = (
  id: string,
  params: {
    name: {
      lastName: string;
      firstName: string;
    };
    email: string;
  },
): AnyAction => ({
  type: UPDATE_INSTRUCTOR_REQUEST,
  payload: { id, params },
});

export const updateInstructorSuccess = (response: {
  instructors: { [key: string]: Instructor };
}): AnyAction => ({
  type: UPDATE_INSTRUCTOR_SUCCESS,
  payload: { response },
});

export const updateInstructorFailure = (error: Error | string): AnyAction => ({
  type: UPDATE_INSTRUCTOR_FAILURE,
  payload: { error },
});
