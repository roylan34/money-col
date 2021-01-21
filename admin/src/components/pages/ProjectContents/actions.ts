import { AnyAction } from 'redux';
import {
  addProjectContent,
  fetchProjectContents,
  updateProjectContent,
  deleteProjectContents,
} from '../../../redux/projectContent/action';

export const createProjectContent = (
  projectContentParams: {
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
  return addProjectContent(
    projectContentParams,
    thumbnailParams,
    params,
    recommendedIds,
  );
};

export const getProjectContents = (query?: {
  where?: [string, '<' | '<=' | '==' | '>=' | '>', string | number | boolean][];
  limit?: number;
  page?: number;
  orderBy?: string;
  sort?: 'desc' | 'asc';
}): AnyAction => {
  return fetchProjectContents(query);
};

export const editProjectContent = (
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
  return updateProjectContent(id, params, thumbnailParams, recommendedIds);
};

export const removeProjectContents = (ids: Array<string>): AnyAction => {
  return deleteProjectContents(ids);
};

export type DispatchFromProps = {
  createProjectContent: typeof createProjectContent;
  getProjectContents: typeof getProjectContents;
  editProjectContent: typeof editProjectContent;
  removeProjectContents: typeof removeProjectContents;
};
