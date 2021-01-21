import { BaseModel } from './baseModel';

export type Todo = {
  title: string;
  userId: string;
  description: string;
  done: boolean;
} & BaseModel;
