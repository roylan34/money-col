import EAProgramRepository from '../../usecases/ports/EAProgramRepository';
import { EAProgram } from '../../domain/entities/EAProgram';
import { TopItem } from '../../domain/entities/topItem';
import {
  findById,
  find,
  exists,
  update,
  getTimestamp,
  insert,
} from './generic-repository';
import {
  FirebaseFirestore,
  FirestoreCollectionReference,
  FirebaseStorage,
  FirestoreTimestamp,
  Timestamp,
} from '../../drivers/Firestore';

export default class EAProgramRepositoryFirebaseImpl
  implements EAProgramRepository {
  firestore: FirebaseFirestore;
  storage: FirebaseStorage;
  EAProgramRef: FirestoreCollectionReference;
  topItemsRef: FirestoreCollectionReference;
  collectionKey: string;
  timestamp: FirestoreTimestamp;

  constructor(
    firestore: FirebaseFirestore,
    storage: FirebaseStorage,
    timestamp: FirestoreTimestamp,
    collection: string = 'EAPrograms',
    topItemsCollection: string = 'topItems',
  ) {
    this.firestore = firestore;
    this.EAProgramRef = this.firestore.collection(collection);
    this.topItemsRef = this.firestore.collection(topItemsCollection);
    this.storage = storage;
    this.collectionKey = collection;
    this.timestamp = timestamp;
  }

  getDownloadURL = async (storageURL: string): Promise<string> => {
    return await this.storage.refFromURL(storageURL).getDownloadURL();
  };

  findById = async (id: string): Promise<EAProgram> => {
    try {
      return (await findById(this.EAProgramRef, id).then(async (response) => {
        let EAProgramDocument = Object.assign(response as EAProgram);

        [
          EAProgramDocument.thumbnailURL,
          EAProgramDocument.fileURL,
        ] = await Promise.all([
          this.getDownloadURL(EAProgramDocument.thumbnailURL),
          this.getDownloadURL(EAProgramDocument.fileURL),
        ]);

        return EAProgramDocument;
      })) as EAProgram;
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
  }): Promise<EAProgram[]> => {
    try {
      const EAPrograms = (await find(this.EAProgramRef, query)) as EAProgram[];

      return await Promise.all(
        EAPrograms.map(async (EAProgramDoc) => {
          const [downloadbleThumbnail, downloadableVideo] = await Promise.all([
            this.getDownloadURL(EAProgramDoc.thumbnailURL),
            this.getDownloadURL(EAProgramDoc.fileURL),
          ]);

          return {
            ...EAProgramDoc,
            thumbnailURL: downloadbleThumbnail,
            fileURL: downloadableVideo,
          };
        }),
      );
    } catch (error) {
      throw error;
    }
  };

  fetchRecommendedItems = async (): Promise<EAProgram[]> => {
    try {
      const recommended = (await findById(
        this.topItemsRef,
        this.EAProgramRef.id,
      )) as TopItem;

      if (!recommended) {
        throw new Error();
      }

      return await Promise.all(
        recommended.list.map(
          (EAProgramId) => this.findById(EAProgramId) as Promise<EAProgram>,
        ),
      );
    } catch (error) {
      throw error;
    }
  };

  fetchMultipleById = async (keys: Array<string>): Promise<EAProgram[]> => {
    try {
      return await Promise.all(
        keys.map(
          (EAProgramId) => this.findById(EAProgramId) as Promise<EAProgram>,
        ),
      );
    } catch (error) {
      throw error;
    }
  };

  create = async (
    videoParams: { file: File; metadata?: object },
    thumbnailParams: { file: File; metadata?: object },
    params: EAProgram,
  ): Promise<string> => {
    try {
      const eaProgramDoc = this.EAProgramRef.doc();

      const [fileURL, thumbnailURL] = await Promise.all([
        this.upload(videoParams, eaProgramDoc.id),
        this.upload(thumbnailParams, eaProgramDoc.id),
      ]);

      return insert(
        this.EAProgramRef,
        {
          ...params,
          id: eaProgramDoc.id,
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
  }): Promise<EAProgram[]> => {
    try {
      const eaPrograms = (await find(this.EAProgramRef, query)) as Array<
        EAProgram & { createdAt: Timestamp }
      >;

      return await Promise.all(
        eaPrograms.map(async (eaProgram) => {
          const [downloadbleThumbnail, downloadableVideo] = await Promise.all([
            this.getDownloadURL(eaProgram.thumbnailURL),
            this.getDownloadURL(eaProgram.fileURL),
          ]);

          return {
            ...eaProgram,
            thumbnailURL: downloadbleThumbnail,
            fileURL: downloadableVideo,
            createdAt: eaProgram.createdAt.toDate(),
            fileName: this.storage.refFromURL(eaProgram.fileURL).name,
          };
        }),
      );
    } catch (error) {
      throw error;
    }
  };

  update = async (
    id: string,
    params: EAProgram,
    thumbnailDocument?: { file: File; metadata?: object },
  ): Promise<string> => {
    try {
      const doesExist = await exists(this.EAProgramRef, 'id', id);

      if (!doesExist) {
        throw new Error('Not found');
      }

      const contentParams = Object.assign({}, params);

      if (thumbnailDocument) {
        const thumbnailURL = await this.upload(thumbnailDocument, id);
        contentParams.thumbnailURL = thumbnailURL;
      }

      await update(this.EAProgramRef, id, contentParams, this.timestamp);

      return id;
    } catch (error) {
      throw error;
    }
  };

  deleteByIds = async (ids: Array<string>): Promise<void> => {
    try {
      const batch = this.firestore.batch();

      ids.forEach((id) => {
        const document = this.EAProgramRef.doc(id);
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
