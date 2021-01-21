import { EAProgram } from '../../domain/entities/EAProgram';

export default interface EAProgramRepository {
  findById(id: string): Promise<EAProgram | undefined>;
  fetchRecommendedItems(): Promise<EAProgram[]>;
  fetchMultipleById(keys: Array<string>): Promise<EAProgram[]>;
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
  }): Promise<EAProgram[]>;
  create(
    fileDocument: { file: File; metadata?: object },
    thumbnailDocument: { file: File; metadata?: object },
    params: EAProgram,
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
  }): Promise<EAProgram[]>;
  update(
    id: string,
    params: EAProgram,
    thumbnailDocument?: { file: File; metadata?: object },
  ): Promise<string>;
  deleteByIds(ids: Array<string>): Promise<void>;
}
