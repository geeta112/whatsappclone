// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAfJiyTPBYLSj5CdZt-bEk31EShWEwwWqw",
  authDomain: "whatsappclone-4e5c0.firebaseapp.com",
  projectId: "whatsappclone-4e5c0",
  storageBucket: "whatsappclone-4e5c0.appspot.com",
  messagingSenderId: "1094486377812",
  appId: "1:1094486377812:web:a4d0c360d749669349f4c1",
  measurementId: "G-Q4R7P1PQCY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
