import { ProjectContent } from '../../domain/entities/projectContent';

export default interface ProjectContentRepository {
  findById(id: string): Promise<ProjectContent | undefined>;
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
  }): Promise<{
    projectContents: ProjectContent[];
    hasPrevPage: boolean;
    hasNextPage: boolean;
  }>;
  fetchMultipleById(keys: Array<string>): Promise<ProjectContent[]>;
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
  }): Promise<ProjectContent[]>;
  create(
    fileDocument: { file: File; metadata?: object },
    thumbnailDocument: { file: File; metadata?: object },
    params: ProjectContent,
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
  }): Promise<ProjectContent[]>;
  update(
    id: string,
    params: ProjectContent,
    thumbnailDocument?: { file: File; metadata?: object },
  ): Promise<string>;
  deleteByIds(ids: Array<string>): Promise<void>;
}
