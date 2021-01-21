import { BaseModel } from './baseModel';

export type VideoLectureTags = {
  showOnMyPage: boolean;
  primeContent: boolean;
  eliteContent: boolean;
  regularContent: boolean;
};

export type VideoLecture = {
  title: string;
  description: string;
  fileURL: string;
  thumbnailURL: string;
  points: number;
  purchases: number;
  lengthInMs: number;
  views: number;
  isPublished: boolean;
  tags: VideoLectureTags;
  recommendedListIndex: number | null;
} & BaseModel;
