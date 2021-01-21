import { BaseModel } from './baseModel';

export type AdvertisementModel = {
  imageUrl: string;
  link: string;
  altText?: string;
};

export type Advertisement = AdvertisementModel & BaseModel;
