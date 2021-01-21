import * as firebase from 'firebase/app';
import themes from './themes/index';

const currentTheme = 'main';

export const theme = themes[currentTheme];

export type FirebaseApp = typeof firebase;
export type FirebaseAuth = firebase.auth.Auth;
export type FirebaseUser = firebase.User;
export type FirebaseFirestore = firebase.firestore.Firestore;
export type FirestoreCollectionReference = firebase.firestore.CollectionReference;
export type FirestoreDocumentData = firebase.firestore.DocumentData;
export type FirestoreDocumentSnapshot = firebase.firestore.DocumentSnapshot;
export type FirestoreQuerySnapshot = firebase.firestore.QuerySnapshot;
export type FirebaseStorage = firebase.storage.Storage;
export type FirestoreTimestamp = firebase.firestore.Timestamp;

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
