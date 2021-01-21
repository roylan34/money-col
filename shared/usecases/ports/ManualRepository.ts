import { Manual } from '../../domain/entities/manual';

export default interface ManualRepository {
  findById(id: string): Promise<Manual | undefined>;
  fetchRecommendedItems(): Promise<Manual[]>;
  fetchMultipleById(keys: Array<string>): Promise<Manual[]>;
  fetchAll(query?: {
    where?: [
      string,
      '<' | '<=' | '==' | '>=' | '>',
      string | number | boolean,
    ][];
    limit?: number;
    page?: number;
    orderBy?: string;
    sort?: 'desc' | 'asc';
  }): Promise<Manual[]>;
  create(
    fileDocument: { file: File; metadata?: object },
    thumbnailParams: { file: File; metadata?: object },
    params: Manual,
  ): Promise<string>;
  find(query?: {
    where?: [
      string,
      '<' | '<=' | '==' | '>=' | '>',
      string | number | boolean,
    ][];
    limit?: number;
    page?: number;
    orderBy?: string;
    sort?: 'desc' | 'asc';
  }): Promise<Manual[]>;
  update(
    id: string,
    params: Manual,
    thumbnailDocument?: { file: File; metadata?: object },
  ): Promise<string>;
  deleteByIds(ids: Array<string>): Promise<void>;
}
