import ManualRepository from '../../usecases/ports/ManualRepository';
import { Manual } from '../../domain/entities/manual';
import { TopItem } from '../../domain/entities/topItem';
import {
  findById,
  find,
  insert,
  update,
  exists,
  getTimestamp,
} from './generic-repository';
import {
  FirebaseFirestore,
  FirestoreCollectionReference,
  FirebaseStorage,
  FirestoreTimestamp,
  Timestamp,
} from '../../drivers/Firestore';

export default class ManualRepositoryFirebaseImpl implements ManualRepository {
  firestore: FirebaseFirestore;
  storage: FirebaseStorage;
  manualRef: FirestoreCollectionReference;
  topItemsRef: FirestoreCollectionReference;
  collectionKey: string;
  timestamp: FirestoreTimestamp;

  constructor(
    firestore: FirebaseFirestore,
    storage: FirebaseStorage,
    timestamp: FirestoreTimestamp,
    collection: string = 'manuals',
    topItemsCollection: string = 'topItems',
  ) {
    this.firestore = firestore;
    this.manualRef = this.firestore.collection(collection);
    this.topItemsRef = this.firestore.collection(topItemsCollection);
    this.storage = storage;
    this.collectionKey = 'manuals';
    this.timestamp = timestamp;
  }

  getDownloadURL = async (storageURL: string): Promise<string> => {
    return await this.storage.refFromURL(storageURL).getDownloadURL();
  };

  findById = async (id: string): Promise<Manual> => {
    try {
      return (await findById(this.manualRef, id).then(async (response) => {
        let manual = Object.assign(response as Manual);

        [manual.thumbnailURL, manual.fileURL] = await Promise.all([
          this.getDownloadURL(manual.thumbnailURL),
          this.getDownloadURL(manual.fileURL),
        ]);

        return manual;
      })) as Manual;
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
  }): Promise<Manual[]> => {
    try {
      const manuals = (await find(this.manualRef, query)) as Array<
        Manual & { createdAt: Timestamp }
      >;

      return await Promise.all(
        manuals.map(async (manual) => {
          const [fileURL, thumbnailURL] = await Promise.all([
            this.getDownloadURL(manual.fileURL),
            this.getDownloadURL(manual.thumbnailURL),
          ]);

          return {
            ...manual,
            fileURL,
            thumbnailURL,
            createdAt: manual.createdAt.toDate(),
          };
        }),
      );
    } catch (error) {
      throw error;
    }
  };

  fetchRecommendedItems = async (): Promise<Manual[]> => {
    try {
      const recommended = (await findById(
        this.topItemsRef,
        this.manualRef.id,
      )) as TopItem;

      if (!recommended) {
        throw new Error();
      }

      return await Promise.all(
        recommended.list.map(
          (manualId) => this.findById(manualId) as Promise<Manual>,
        ),
      );
    } catch (error) {
      throw error;
    }
  };

  fetchMultipleById = async (keys: Array<string>): Promise<Manual[]> => {
    try {
      return await Promise.all(
        keys.map((manualId) => this.findById(manualId) as Promise<Manual>),
      );
    } catch (error) {
      throw error;
    }
  };

  create = async (
    fileDocument: { file: File; metadata?: object },
    thumbnail: { file: File; metadata?: object },
    params: Manual,
  ): Promise<string> => {
    try {
      const manualDoc = this.manualRef.doc();

      const [fileURL, thumbnailURL] = await Promise.all([
        this.upload(fileDocument, manualDoc.id),
        this.upload(thumbnail, manualDoc.id),
      ]);

      return insert(
        this.manualRef,
        {
          ...params,
          id: manualDoc.id,
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
  }): Promise<Manual[]> => {
    try {
      const manuals = (await find(this.manualRef, query)) as Array<
        Manual & { createdAt: Timestamp }
      >;

      return await Promise.all(
        manuals.map(async (manual) => {
          const [fileURL, thumbnailURL] = await Promise.all([
            this.getDownloadURL(manual.fileURL),
            this.getDownloadURL(manual.thumbnailURL),
          ]);

          return {
            ...manual,
            fileURL,
            thumbnailURL,
            createdAt: manual.createdAt.toDate(),
            fileName: this.storage.refFromURL(manual.fileURL).name,
          };
        }),
      );
    } catch (error) {
      throw error;
    }
  };

  update = async (
    id: string,
    params: Manual,
    thumbnailParams?: {
      file: File;
      metadata?: object;
    },
  ): Promise<string> => {
    try {
      const doesExist = await exists(this.manualRef, 'id', id);

      if (!doesExist) {
        throw new Error('Not found');
      }

      const contentParams = Object.assign({}, params);

      if (thumbnailParams) {
        contentParams.thumbnailURL = await this.upload(thumbnailParams, id);
      }

      await update(this.manualRef, id, contentParams, this.timestamp);

      return id;
    } catch (error) {
      throw error;
    }
  };

  deleteByIds = async (ids: Array<string>): Promise<void> => {
    try {
      const batch = this.firestore.batch();

      ids.forEach((id) => {
        const document = this.manualRef.doc(id);
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
