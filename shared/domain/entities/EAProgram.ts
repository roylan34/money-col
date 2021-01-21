import { BaseModel } from './baseModel';

export type EAProgram = {
  title: string;
  description: string;
  fileURL: string;
  thumbnailURL: string;
  points: number;
  purchases: number;
  isPublished: boolean;
  tags: {
    showOnMyPage: boolean;
    primeContent: boolean;
    eliteContent: boolean;
    regularContent: boolean;
  };
  recommendedListIndex: number | null;
} & BaseModel;
