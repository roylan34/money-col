import { VideoLecture } from '../../domain/entities/videoLecture';

export default interface VideoLectureRepository {
  findById(id: string): Promise<VideoLecture | undefined>;
  fetchMultipleById(keys: Array<string>): Promise<VideoLecture[]>;
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
  }): Promise<VideoLecture[]>;
  create(
    fileDocument: { file: File; metadata?: object },
    thumbnailDocument: { file: File; metadata?: object },
    params: VideoLecture,
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
  }): Promise<VideoLecture[]>;
  update(
    id: string,
    params: VideoLecture,
    thumbnailDocument?: { file: File; metadata?: object },
  ): Promise<string>;
  deleteByIds(ids: Array<string>): Promise<void>;
  findByPage(query?: {
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
  }): Promise<{
    data: VideoLecture[];
    hasNextPage: boolean;
    hasPrevPage: boolean;
  }>;
}
