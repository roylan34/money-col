import { AnyAction } from 'redux';
import {
  addEAProgram,
  fetchEAPrograms,
  updateEAProgram,
  deleteEAPrograms,
} from '../../../redux/eaProgram/action';

export const createEAProgram = (
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
): AnyAction => {
  return addEAProgram(eaProgramParams, thumbnailParams, params, recommendedIds);
};

export const getEAPrograms = (query?: {
  where?: [string, '<' | '<=' | '==' | '>=' | '>', string | number | boolean][];
  limit?: number;
  page?: number;
  orderBy?: string;
  sort?: 'desc' | 'asc';
}): AnyAction => {
  return fetchEAPrograms(query);
};

export const editEAProgram = (
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
): AnyAction => {
  return updateEAProgram(id, params, thumbnailParams, recommendedIds);
};

export const removeEAPrograms = (ids: Array<string>): AnyAction => {
  return deleteEAPrograms(ids);
};

export type DispatchFromProps = {
  createEAProgram: typeof createEAProgram;
  getEAPrograms: typeof getEAPrograms;
  editEAProgram: typeof editEAProgram;
  removeEAPrograms: typeof removeEAPrograms;
};
