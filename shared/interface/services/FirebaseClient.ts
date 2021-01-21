import { FirebaseConfig, FirebaseApp } from '../../drivers/Firestore';

export default class FirebaseClient {
  firebase: FirebaseApp;

  constructor(firebase: FirebaseApp, firebaseConfig: FirebaseConfig) {
    this.firebase = firebase;

    this.initializeApp(firebaseConfig);
  }

  initializeApp(firebaseConfig: FirebaseConfig): void {
    if (this.firebase.apps.length === 0) {
      this.firebase.initializeApp(firebaseConfig);
    }
  }
}
