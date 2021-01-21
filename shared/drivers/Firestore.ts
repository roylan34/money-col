import firebase from 'firebase/app';

// export default firebase.firestore.Firestore;

export type FirebaseConfig = {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
};

export const FirebaseApp = firebase;
export type FirebaseAuth = firebase.auth.Auth;
export type FirebaseUser = firebase.User;
export type FirebaseFirestore = firebase.firestore.Firestore;
export type FirestoreCollectionReference = firebase.firestore.CollectionReference;
export type FirestoreDocumentData = firebase.firestore.DocumentData;
export type FirestoreDocumentChange = firebase.firestore.DocumentChange<
  FirestoreDocumentData
>;
export type FirestoreDocumentSnapshot = firebase.firestore.DocumentSnapshot;
export type FirestoreQuerySnapshot = firebase.firestore.QuerySnapshot;
export type FirestoreQueryDocumentSnapshot = firebase.firestore.QueryDocumentSnapshot;
export type FirebaseStorage = firebase.storage.Storage;
export type EmailAuthProvider = typeof firebase.auth.EmailAuthProvider;
export type FirestoreBatch = firebase.firestore.WriteBatch;
export type FirestoreTimestamp = typeof firebase.firestore.Timestamp;
export type Timestamp = firebase.firestore.Timestamp;
