import { AnyAction } from 'redux';
import {
  addManual,
  fetchManuals,
  updateManual,
  deleteManuals,
} from '../../../redux/manual/action';

export const createManual = (
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
): AnyAction => {
  return addManual(manualParams, thumbnailParams, params);
};

export const getManuals = (query?: {
  where?: [string, '<' | '<=' | '==' | '>=' | '>', string | number | boolean][];
  limit?: number;
  page?: number;
  orderBy?: string;
  sort?: 'desc' | 'asc';
}): AnyAction => {
  return fetchManuals(query);
};

export const editManual = (
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
): AnyAction => {
  return updateManual(id, params, thumbnailParams);
};

export const removeManuals = (ids: Array<string>): AnyAction => {
  return deleteManuals(ids);
};

export type DispatchFromProps = {
  createManual: typeof createManual;
  getManuals: typeof getManuals;
  editManual: typeof editManual;
  removeManuals: typeof removeManuals;
};
