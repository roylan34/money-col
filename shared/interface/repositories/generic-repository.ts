import {
  FirestoreCollectionReference,
  FirestoreDocumentData,
  FirestoreDocumentSnapshot,
  FirestoreQuerySnapshot,
  FirestoreTimestamp,
} from '../../drivers/Firestore';

export const findById = (
  collectionRef: FirestoreCollectionReference,
  id: string,
): Promise<FirestoreDocumentData | undefined> => {
  return new Promise<FirestoreDocumentData>((resolve, reject) => {
    collectionRef
      .doc(id)
      .get()
      .then((doc: FirestoreDocumentSnapshot) => {
        resolve(doc.data());
      })
      .catch(reject);
  });
};

export const find = (
  collectionRef: FirestoreCollectionReference,
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
): Promise<FirestoreDocumentData[]> => {
  return new Promise<FirestoreDocumentData[]>((resolve, reject) => {
    const { where, limit, page, orderBy, sort } = query;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let fireStoreQuery: any = collectionRef;

    if (where && where.length) {
      where.forEach((element) => {
        fireStoreQuery = fireStoreQuery.where(
          element[0],
          element[1],
          element[2],
        );
      });
    }

    if (limit) {
      fireStoreQuery = fireStoreQuery.limit(limit);

      if (page) {
        // offset is not available on client SDK
        // if pagination is needed, use findByPage
        // fireStoreQuery = fireStoreQuery.offset((page - 1) * limit);
      }
    }

    if (orderBy) {
      fireStoreQuery = fireStoreQuery.orderBy(orderBy, sort);
    }

    fireStoreQuery
      .get()
      .then((querySnapshot: FirestoreQuerySnapshot) => {
        const final: FirestoreDocumentData[] = [];

        querySnapshot.forEach((result: FirestoreDocumentSnapshot) => {
          const data = result.data();

          final.push({ id: result.id, ...data });
        });

        resolve(final);
      })
      .catch(reject);
  });
};

export const insert = (
  collectionRef: FirestoreCollectionReference,
  data: FirestoreDocumentData,
  timestamp: FirestoreTimestamp,
): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const { id } = data;
    const createdAt = timestamp.now();

    if (id && id.length) {
      collectionRef
        .doc(id)
        .set({ createdAt, updatedAt: createdAt, isDeleted: false, ...data })
        .then(() => {
          resolve(id);
        })
        .catch(reject);
    } else {
      const collectionDocRef = collectionRef.doc();

      collectionDocRef
        .set({
          createdAt,
          updatedAt: createdAt,
          isDeleted: false,
          ...data,
          id: collectionDocRef.id,
        })
        .then(() => {
          resolve(collectionDocRef.id);
        })
        .catch(reject);
    }
  });
};

export const exists = (
  collectionRef: FirestoreCollectionReference,
  key: 'id' | string,
  value: string | number | boolean,
): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    if (key === 'id' && typeof value === 'string') {
      collectionRef
        .doc(value)
        .get()
        .then((snapShot: FirestoreDocumentSnapshot) => {
          resolve(snapShot.exists);
        })
        .catch(reject);
    } else {
      collectionRef
        .where(key, '==', value)
        .get()
        .then((snapShot: FirestoreQuerySnapshot) => {
          resolve(!snapShot.empty);
        })
        .catch(reject);
    }
  });
};

export const update = (
  collectionRef: FirestoreCollectionReference,
  id: string,
  data: FirestoreDocumentData,
  timestamp: FirestoreTimestamp,
): Promise<void> =>
  new Promise((resolve, reject) => {
    collectionRef
      .doc(id)
      .set(
        {
          updatedAt: timestamp.now(),
          ...data,
        },
        { merge: true },
      )
      .then(() => {
        resolve();
      })
      .catch(reject);
  });

export const remove = (
  collectionRef: FirestoreCollectionReference,
  id: string,
  timestamp: FirestoreTimestamp,
): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    collectionRef
      .doc(id)
      .update({
        isDeleted: true,
        deletedAt: timestamp.now(),
      })
      .then(() => {
        resolve();
      })
      .catch(reject);
  });
};

export const getTimestamp = (
  timestamp: FirestoreTimestamp,
): firebase.firestore.Timestamp => timestamp.now();

type PaginateFindObject = {
  data: FirestoreDocumentData[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
};

export const paginateFind = (
  collectionRef: FirestoreCollectionReference,
  query: {
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
): Promise<PaginateFindObject> => {
  return new Promise<PaginateFindObject>(async (resolve, reject) => {
    const { where, limit, orderBy, sort, mode, firstId, lastId } = query;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let fireStoreQuery: any = collectionRef;

    if (where && where.length) {
      where.forEach((element) => {
        fireStoreQuery = fireStoreQuery.where(
          element[0],
          element[1],
          element[2],
        );
      });
    }

    if (orderBy) {
      fireStoreQuery = fireStoreQuery.orderBy(orderBy, sort);
    }

    if (mode === 'next') {
      fireStoreQuery = fireStoreQuery.limit(limit + 1);

      if (lastId) {
        const lastDoc = await collectionRef.doc(lastId).get();
        fireStoreQuery = fireStoreQuery.startAfter(lastDoc);
      }
    } else if (mode === 'prev') {
      if (firstId) {
        const firstDoc = await collectionRef.doc(firstId).get();
        fireStoreQuery = fireStoreQuery
          .endBefore(firstDoc)
          .limitToLast(limit + 1);
      } else {
        fireStoreQuery = fireStoreQuery.limit(limit);
      }
    }

    fireStoreQuery
      .get()
      .then((querySnapshot: FirestoreQuerySnapshot) => {
        let final: FirestoreDocumentData[] = [];

        querySnapshot.forEach((result: FirestoreDocumentSnapshot) => {
          const data = result.data();

          final.push({ id: result.id, ...data });
        });

        const hasExceededLimit = final.length > limit;
        const hasNextPage = mode === 'next' ? hasExceededLimit : true;
        const hasPrevPage = mode === 'prev' ? hasExceededLimit : true;
        final =
          mode === 'prev' && hasExceededLimit
            ? final.slice(1)
            : final.slice(0, limit);

        resolve({ data: final, hasNextPage, hasPrevPage });
      })
      .catch(reject);
  });
};
