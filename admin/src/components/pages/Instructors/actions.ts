import { AnyAction } from 'redux';
import {
  fetchInstructors,
  createInstructor,
  deleteInstructors,
  updateInstructor,
} from '../../../redux/instructor/action';

export const getInstructors = (query?: {
  where?: [string, '<' | '<=' | '==' | '>=' | '>', string | number | boolean][];
  limit?: number;
  page?: number;
  orderBy?: string;
  sort?: 'desc' | 'asc';
}): AnyAction => {
  return fetchInstructors(query);
};

export const addInstructor = (params: {
  lastName: string;
  firstName: string;
  email: string;
}): AnyAction => {
  return createInstructor(params);
};

export const removeInstructors = (ids: Array<string>): AnyAction => {
  return deleteInstructors(ids);
};

export const editInstructor = (
  id: string,
  params: {
    name: {
      lastName: string;
      firstName: string;
    };
    email: string;
  },
): AnyAction => {
  return updateInstructor(id, params);
};

export type DispatchFromProps = {
  getInstructors: typeof getInstructors;
  addInstructor: typeof addInstructor;
  removeInstructors: typeof removeInstructors;
  editInstructor: typeof editInstructor;
};
