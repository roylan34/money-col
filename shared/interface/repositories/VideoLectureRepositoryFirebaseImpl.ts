import VideoLectureRepository from '../../usecases/ports/VideoLectureRepository';
import { VideoLecture } from '../../domain/entities/videoLecture';
import {
  findById,
  find,
  exists,
  update,
  getTimestamp,
  insert,
  paginateFind,
} from './generic-repository';
import {
  FirebaseFirestore,
  FirestoreCollectionReference,
  FirebaseStorage,
  FirestoreTimestamp,
  Timestamp,
} from '../../drivers/Firestore';

export default class VideoLectureRepositoryFirebaseImpl
  implements VideoLectureRepository {
  firestore: FirebaseFirestore;
  storage: FirebaseStorage;
  videoLectureRef: FirestoreCollectionReference;
  topItemsRef: FirestoreCollectionReference;
  collectionKey: string;
  timestamp: FirestoreTimestamp;

  constructor(
    firestore: FirebaseFirestore,
    storage: FirebaseStorage,
    timestamp: FirestoreTimestamp,
    collection: string = 'videoLectures',
    topItemsCollection: string = 'topItems',
  ) {
    this.firestore = firestore;
    this.videoLectureRef = this.firestore.collection(collection);
    this.topItemsRef = this.firestore.collection(topItemsCollection);
    this.storage = storage;
    this.collectionKey = 'videoLectures';
    this.timestamp = timestamp;
  }

  getDownloadURL = async (storageURL: string): Promise<string> => {
    return await this.storage.refFromURL(storageURL).getDownloadURL();
  };

  findById = async (id: string): Promise<VideoLecture> => {
    try {
      return (await findById(this.videoLectureRef, id).then(
        async (response) => {
          let videoLecture = Object.assign(response as VideoLecture);

          videoLecture.thumbnailURL = await this.getDownloadURL(
            videoLecture.thumbnailURL,
          );

          videoLecture.fileURL = await this.getDownloadURL(
            videoLecture.fileURL,
          );

          return videoLecture;
        },
      )) as VideoLecture;
    } catch (error) {
      throw error;
    }
  };

  fetchAll = async (query: {
    where?: [
      string,
      '<' | '<=' | '==' | '>=' | '>',
      string | number | boolean,
    ][];
    limit?: number;
    page?: number;
    orderBy?: string;
    sort?: 'desc' | 'asc';
  }): Promise<VideoLecture[]> => {
    try {
      const videoLectures = (await find(
        this.videoLectureRef,
        query,
      )) as VideoLecture[];

      return await Promise.all(
        videoLectures.map(async (videoLecture) => {
          const [downloadbleThumbnail, downloadableVideo] = await Promise.all([
            this.getDownloadURL(videoLecture.thumbnailURL),
            this.getDownloadURL(videoLecture.fileURL),
          ]);

          return {
            ...videoLecture,
            thumbnailURL: downloadbleThumbnail,
            fileURL: downloadableVideo,
          };
        }),
      );
    } catch (error) {
      throw error;
    }
  };

  fetchMultipleById = async (keys: Array<string>): Promise<VideoLecture[]> => {
    try {
      return await Promise.all(
        keys.map(
          (videoLectureId) =>
            this.findById(videoLectureId) as Promise<VideoLecture>,
        ),
      );
    } catch (error) {
      throw error;
    }
  };

  create = async (
    videoParams: { file: File; metadata?: object },
    thumbnailParams: { file: File; metadata?: object },
    params: VideoLecture,
  ): Promise<string> => {
    try {
      const videoLectureDoc = this.videoLectureRef.doc();

      const [fileURL, thumbnailURL] = await Promise.all([
        this.upload(videoParams, videoLectureDoc.id),
        this.upload(thumbnailParams, videoLectureDoc.id),
      ]);

      return insert(
        this.videoLectureRef,
        {
          ...params,
          id: videoLectureDoc.id,
          fileURL,
          thumbnailURL,
        },
        this.timestamp,
      );
    } catch (error) {
      throw error;
    }
  };

  upload = async (
    params: {
      file: File;
      metadata?: object;
    },
    id: string,
  ): Promise<string> => {
    try {
      const { file, metadata } = params;
      const extension = file.name.split('.').pop();
      const ref = `${this.collectionKey}/${id}/${id}.${extension}`;

      const task = await this.storage.ref(ref).put(file, metadata);

      return `gs://${task.metadata.bucket}/${task.metadata.fullPath}`;
    } catch (error) {
      throw error;
    }
  };

  find = async (query?: {
    where?: [
      string,
      '<' | '<=' | '==' | '>=' | '>',
      string | number | boolean,
    ][];
    limit?: number;
    page?: number;
    orderBy?: string;
    sort?: 'desc' | 'asc';
  }): Promise<VideoLecture[]> => {
    try {
      const videoLectures = (await find(this.videoLectureRef, query)) as Array<
        VideoLecture & { createdAt: Timestamp }
      >;

      return await Promise.all(
        videoLectures.map(async (videoLecture) => {
          const [downloadbleThumbnail, downloadableVideo] = await Promise.all([
            this.getDownloadURL(videoLecture.thumbnailURL),
            this.getDownloadURL(videoLecture.fileURL),
          ]);

          return {
            ...videoLecture,
            thumbnailURL: downloadbleThumbnail,
            fileURL: downloadableVideo,
            createdAt: videoLecture.createdAt.toDate(),
            fileName: this.storage.refFromURL(videoLecture.fileURL).name,
          };
        }),
      );
    } catch (error) {
      throw error;
    }
  };

  findByPage = async (query: {
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
  }> => {
    const {
      data: videoLectures,
      hasPrevPage,
      hasNextPage,
    } = (await paginateFind(this.videoLectureRef, query)) as {
      data: Array<VideoLecture & { createdAt: Timestamp }>;
      hasPrevPage: boolean;
      hasNextPage: boolean;
    };

    const data = await Promise.all(
      videoLectures.map(async (videoLecture) => {
        const [downloadbleThumbnail, downloadableVideo] = await Promise.all([
          this.getDownloadURL(videoLecture.thumbnailURL),
          this.getDownloadURL(videoLecture.fileURL),
        ]);

        return {
          ...videoLecture,
          thumbnailURL: downloadbleThumbnail,
          fileURL: downloadableVideo,
          createdAt: videoLecture.createdAt.toDate(),
          fileName: this.storage.refFromURL(videoLecture.fileURL).name,
        };
      }),
    );

    return { data, hasNextPage, hasPrevPage };
  };

  update = async (
    id: string,
    params: VideoLecture,
    thumbnailDocument?: { file: File; metadata?: object },
  ): Promise<string> => {
    try {
      const doesExist = await exists(this.videoLectureRef, 'id', id);

      if (!doesExist) {
        throw new Error('Not found');
      }

      const contentParams = Object.assign({}, params);

      if (thumbnailDocument) {
        const thumbnailURL = await this.upload(thumbnailDocument, id);
        contentParams.thumbnailURL = thumbnailURL;
      }

      await update(this.videoLectureRef, id, contentParams, this.timestamp);

      return id;
    } catch (error) {
      throw error;
    }
  };

  deleteByIds = async (ids: Array<string>): Promise<void> => {
    try {
      const batch = this.firestore.batch();

      ids.forEach((id) => {
        const document = this.videoLectureRef.doc(id);
        batch.update(document, {
          isDeleted: true,
          deletedAt: getTimestamp(this.timestamp),
        });
      });

      await batch.commit();
    } catch (error) {
      throw error;
    }
  };
}
