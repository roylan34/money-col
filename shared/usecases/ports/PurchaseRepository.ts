import { Purchase } from '../../domain/entities/purchase';

export default interface PurchaseRepository {
  find(
    userId: string,
    query: {
      where?: [
        string,
        '<' | '<=' | '==' | '>=' | '>',
        string | number | boolean,
      ][];
      limit?: number;
      page?: number;
      orderBy?: string;
      sort?: 'desc' | 'asc';
    },
  ): Promise<Purchase[] | undefined>;
  insert(userId: string, params: Purchase): Promise<string>;
  findByPage(
    userId: string,
    query?: {
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
    },
  ): Promise<{
    data: Purchase[] | undefined;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  }>;
}
