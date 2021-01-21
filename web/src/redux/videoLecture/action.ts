import { AnyAction } from 'redux';
import {
  FETCH_RECOMMENDED_VIDEOS_REQUEST,
  FETCH_RECOMMENDED_VIDEOS_FAILURE,
  FETCH_RECOMMENDED_VIDEOS_SUCCESS,
  SET_VIDEO_DATA,
  SET_RECOMMENDED_VIDEOS,
  FETCH_LAST_BOUGHT_VIDEOS_REQUEST,
  FETCH_LAST_BOUGHT_VIDEOS_FAILURE,
  FETCH_LAST_BOUGHT_VIDEOS_SUCCESS,
  SET_LAST_BOUGHT_VIDEOS,
  FETCH_VIDEOS_FAILURE,
  FETCH_VIDEOS_REQUEST,
  FETCH_VIDEOS_SUCCESS,
} from './actionType';
import { VideoLecture } from '../../domain/entities';

export const fetchVideos = (query?: {
  where?: [string, '<' | '<=' | '==' | '>=' | '>', string | number | boolean][];
  limit?: number;
  page?: number;
  orderBy?: string;
  sort?: 'desc' | 'asc';
}): AnyAction => ({
  type: FETCH_VIDEOS_REQUEST,
  payload: { query },
});

export const fetchVideosSuccess = (response: Object): AnyAction => ({
  type: FETCH_VIDEOS_SUCCESS,
  payload: { response },
});

export const fetchVideosFailure = (error: Error | string): AnyAction => ({
  type: FETCH_VIDEOS_FAILURE,
  payload: { error },
});

export const fetchRecommendedVideos = (): AnyAction => ({
  type: FETCH_RECOMMENDED_VIDEOS_REQUEST,
});

export const fetchRecommendedVideosSuccess = (response: Object): AnyAction => ({
  type: FETCH_RECOMMENDED_VIDEOS_SUCCESS,
  payload: { response },
});

export const fetchRecommendedVideosFailure = (
  error: Error | string,
): AnyAction => ({
  type: FETCH_RECOMMENDED_VIDEOS_FAILURE,
  payload: { error },
});

export const setVideoData = (videoData: {
  [key: string]: VideoLecture;
}): AnyAction => ({
  type: SET_VIDEO_DATA,
  payload: videoData,
});

export const setLastBoughtVideos = (
  lastBoughtVideos: Array<VideoLecture>,
): AnyAction => ({
  type: SET_LAST_BOUGHT_VIDEOS,
  payload: lastBoughtVideos,
});

export const setRecommendedVideoIds = (
  recommendedVideo: Array<VideoLecture>,
): AnyAction => ({
  type: SET_RECOMMENDED_VIDEOS,
  payload: recommendedVideo,
});

export const fetchLastBoughtVideos = (keys: Array<string>): AnyAction => ({
  type: FETCH_LAST_BOUGHT_VIDEOS_REQUEST,
  payload: { keys },
});

export const fetchLastBoughtVideosSuccess = (response: Object): AnyAction => ({
  type: FETCH_LAST_BOUGHT_VIDEOS_SUCCESS,
  payload: { response },
});

export const fetchLastBoughtVideosFailure = (
  error: Error | string,
): AnyAction => ({
  type: FETCH_LAST_BOUGHT_VIDEOS_FAILURE,
  payload: { error },
});
