import { BaseModel } from './baseModel';

export type UserRoles = {
  lecturer: boolean;
  subscriber: boolean;
  admin: boolean;
};

export type AdminUser = {
  email: string;
  hasUpdatedDefaultPassword?: boolean;
  roles: UserRoles;
} & BaseModel;

// TO DO: this must be refactored
