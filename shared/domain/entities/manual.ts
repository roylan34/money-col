import { BaseModel } from './baseModel';

export type Manual = {
  title: string;
  fileURL: string;
  thumbnailURL: string;
  isPublished: boolean;
  tags: {
    primeContent: boolean;
    eliteContent: boolean;
    regularContent: boolean;
    [key: string]: boolean;
  };
} & BaseModel;
