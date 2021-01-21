import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

import { firebaseConfig } from './config';

firebase.initializeApp(firebaseConfig);
// Note: this is for testing security rules

export const secondaryFirebaseApp = firebase.initializeApp(
  firebaseConfig,
  'Secondary',
);

export const firestore = firebase.firestore();

export const auth = firebase.auth();

export const storage = firebase.storage();

export const emailAuthProvider = firebase.auth.EmailAuthProvider;

export const timestamp = firebase.firestore.Timestamp;

export type Firestore = firebase.firestore.Firestore;
export type FirebaseAuth = firebase.auth.Auth;
export type FirebaseStorage = firebase.storage.Storage;

export default firebase;
