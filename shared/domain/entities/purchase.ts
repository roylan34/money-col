import { BaseModel } from './baseModel';

export type Purchase = {
  id: string;
  ref: string;
  tags: {
    [key: string]: boolean;
  };
  title: string;
  points: number;
} & BaseModel;
