import ProjectContentRepository from '../../usecases/ports/ProjectContentRepository';
import { ProjectContent } from '../../domain/entities/projectContent';
import {
  findById,
  find,
  update,
  exists,
  getTimestamp,
  insert,
} from './generic-repository';
import {
  FirebaseFirestore,
  FirestoreCollectionReference,
  FirebaseStorage,
  FirestoreTimestamp,
  Timestamp,
  FirestoreDocumentSnapshot,
} from '../../drivers/Firestore';

export default class ProjectContentRepositoryFirebaseImpl
  implements ProjectContentRepository {
  firestore: FirebaseFirestore;
  storage: FirebaseStorage;
  projectContentRef: FirestoreCollectionReference;
  topItemsRef: FirestoreCollectionReference;
  collectionKey: string;
  timestamp: FirestoreTimestamp;
  firstDocQuery: FirestoreDocumentSnapshot | null;
  lastDocQuery: FirestoreDocumentSnapshot | null;

  constructor(
    firestore: FirebaseFirestore,
    storage: FirebaseStorage,
    timestamp: FirestoreTimestamp,
    collection: string = 'projectContents',
    topItemsCollection: string = 'topItems',
  ) {
    this.firestore = firestore;
    this.collectionKey = collection;
    this.projectContentRef = this.firestore.collection(collection);
    this.topItemsRef = this.firestore.collection(topItemsCollection);
    this.storage = storage;
    this.timestamp = timestamp;
    this.firstDocQuery = null;
    this.lastDocQuery = null;
  }

  getDownloadURL = async (storageURL: string): Promise<string> => {
    return await this.storage.refFromURL(storageURL).getDownloadURL();
  };

  findById = async (id: string): Promise<ProjectContent> => {
    try {
      return (await findById(this.projectContentRef, id).then(
        async (response) => {
          let projectContent = Object.assign(response as ProjectContent);

          projectContent.thumbnailURL = await this.getDownloadURL(
            projectContent.thumbnailURL,
          );

          projectContent.fileURL = await this.getDownloadURL(
            projectContent.fileURL,
          );

          return projectContent;
        },
      )) as ProjectContent;
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
  }): Promise<ProjectContent[]> => {
    try {
      const projectContents = (await find(
        this.projectContentRef,
        query,
      )) as ProjectContent[];

      return await Promise.all(
        projectContents.map(async (projectContent) => {
          const [downloadbleThumbnail, downloadableFile] = await Promise.all([
            this.getDownloadURL(projectContent.thumbnailURL),
            this.getDownloadURL(projectContent.fileURL),
          ]);

          return {
            ...projectContent,
            thumbnailURL: downloadbleThumbnail,
            fileURL: downloadableFile,
          };
        }),
      );
    } catch (error) {
      throw error;
    }
  };

  fetchMultipleById = async (
    keys: Array<string>,
  ): Promise<ProjectContent[]> => {
    try {
      return await Promise.all(
        keys.map(
          (projectContentId) =>
            this.findById(projectContentId) as Promise<ProjectContent>,
        ),
      );
    } catch (error) {
      throw error;
    }
  };

  create = async (
    docParams: { file: File; metadata?: object },
    thumbnailParams: { file: File; metadata?: object },
    params: ProjectContent,
  ): Promise<string> => {
    try {
      const projectContentDoc = this.projectContentRef.doc();

      const [fileURL, thumbnailURL] = await Promise.all([
        this.upload(docParams, projectContentDoc.id),
        this.upload(thumbnailParams, projectContentDoc.id),
      ]);

      return insert(
        this.projectContentRef,
        {
          ...params,
          id: projectContentDoc.id,
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
  }): Promise<{
    projectContents: ProjectContent[];
    hasPrevPage: boolean;
    hasNextPage: boolean;
  }> => {
    /// TO DO
    console.log(query);
    return { projectContents: [], hasNextPage: false, hasPrevPage: false };
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
  }): Promise<ProjectContent[]> => {
    try {
      const projectContents = (await find(
        this.projectContentRef,
        query || {},
      )) as Array<ProjectContent & { createdAt: Timestamp }>;

      return await Promise.all(
        projectContents.map(async (projectContent) => {
          const [downloadbleThumbnail, downloadableFile] = await Promise.all([
            this.getDownloadURL(projectContent.thumbnailURL),
            this.getDownloadURL(projectContent.fileURL),
          ]);

          return {
            ...projectContent,
            thumbnailURL: downloadbleThumbnail,
            fileURL: downloadableFile,
            createdAt: projectContent.createdAt.toDate(),
            fileName: this.storage.refFromURL(projectContent.fileURL).name,
          };
        }),
      );
    } catch (error) {
      throw error;
    }
  };

  update = async (
    id: string,
    params: ProjectContent,
    thumbnailDocument?: { file: File; metadata?: object },
  ): Promise<string> => {
    try {
      const doesExist = await exists(this.projectContentRef, 'id', id);

      if (!doesExist) {
        throw new Error('Not found');
      }

      const contentParams = Object.assign({}, params);

      if (thumbnailDocument) {
        const thumbnailURL = await this.upload(thumbnailDocument, id);
        contentParams.thumbnailURL = thumbnailURL;
      }

      await update(this.projectContentRef, id, contentParams, this.timestamp);

      return id;
    } catch (error) {
      throw error;
    }
  };

  deleteByIds = async (ids: Array<string>): Promise<void> => {
    try {
      const batch = this.firestore.batch();

      ids.forEach((id) => {
        const document = this.projectContentRef.doc(id);
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
