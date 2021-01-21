import { AnyAction } from 'redux';
import {
  addVideoLecture,
  fetchVideoLectures,
  updateVideoLecture,
  deleteVideoLectures,
} from '../../../redux/videoLecture/action';

export const createVideoLecture = (
  videoLectureParams: { file: File; metadata?: object },
  thumbnailParams: { file: File; metadata?: object },
  params: {
    title: string;
    description: string;
    points: number;
    lengthInMs: number;
    isPublished: boolean;
    tags: {
      showOnMyPage: boolean;
      primeContent: boolean;
      regularContent: boolean;
      eliteContent: boolean;
    };
    recommendedListIndex: number | null;
  },
  recommendedIds?: { [key: string]: string },
): AnyAction => {
  return addVideoLecture(
    videoLectureParams,
    thumbnailParams,
    params,
    recommendedIds,
  );
};

export const getVideoLectures = (query?: {
  where?: [string, '<' | '<=' | '==' | '>=' | '>', string | number | boolean][];
  limit: number;
  mode: 'prev' | 'next';
  orderBy?: string;
  sort?: 'desc' | 'asc';
  firstId: string;
  lastId: string;
}): AnyAction => {
  return fetchVideoLectures(query);
};

export const editVideoLecture = (
  id: string,
  params: {
    title: string;
    description: string;
    points: number;
    isPublished: boolean;
    tags: {
      showOnMyPage: boolean;
      primeContent: boolean;
      regularContent: boolean;
      eliteContent: boolean;
    };
    recommendedListIndex: number | null;
  },
  thumbnailParams?: { file: File; metadata?: object },
  recommendedIds?: { [key: string]: string },
): AnyAction => {
  return updateVideoLecture(id, params, thumbnailParams, recommendedIds);
};

export const removeVideoLectures = (ids: Array<string>): AnyAction => {
  return deleteVideoLectures(ids);
};

export type DispatchFromProps = {
  createVideoLecture: typeof createVideoLecture;
  getVideoLectures: typeof getVideoLectures;
  editVideoLecture: typeof editVideoLecture;
  removeVideoLectures: typeof removeVideoLectures;
};
