import { User } from '../../domain/entities/user';
import { Stripe } from '../../domain/entities/stripe';

export default interface UserRepository {
  insert(params: User): Promise<string>;
  findById(id: string): Promise<User | undefined>;
  update(
    id: string,
    params: {
      name?: {
        firstName: string;
        lastName: string;
      };
      photoURL?: string;
      stripe?: Stripe;
      hasUpdatedDefaultPassword?: boolean;
    },
  ): Promise<void>;
  upload(path: string, file: File): Promise<string>;
  find(query: {
    where?: [
      string,
      '<' | '<=' | '==' | '>=' | '>',
      string | number | boolean,
    ][];
    limit?: number;
    page?: number;
    orderBy?: string;
    sort?: 'desc' | 'asc';
  }): Promise<User[]>;
  findByPage(query: {
    where?: [
      string,
      '<' | '<=' | '==' | '>=' | '>',
      string | number | boolean,
    ][];
    limit: number;
    mode: 'prev' | 'next';
    orderBy?: string;
    sort?: 'desc' | 'asc';
    firstId: string;
    lastId: string;
  }): Promise<{ data: User[]; hasNextPage: boolean; hasPrevPage: boolean }>;
  purchaseContent(
    userId: string,
    itemId: string,
    purchaseDoc: {
      id: string;
      ref: string;
      tags: {
        [key: string]: boolean;
      };
    },
    discount: number,
  ): Promise<number>;
  deleteByIds(ids: Array<string>): Promise<void>;
  addPoints(
    userId: string,
    paymentHistoryId: string,
    chargeID: string,
  ): Promise<void>;
}
