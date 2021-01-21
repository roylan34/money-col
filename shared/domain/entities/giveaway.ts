import { BaseModel } from './baseModel';

export type Giveaway = {
  points: number;
  effectiveDate: Date;
  userId?: string;
} & BaseModel;
