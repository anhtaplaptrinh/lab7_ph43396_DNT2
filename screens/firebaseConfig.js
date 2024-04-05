// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getDatabase } from 'firebase/database'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU8tcC09RZm0TMZeo7XBzcvLEw5xHdH5w",
  authDomain: "lab2-ph43396.firebaseapp.com",
  projectId: "lab2-ph43396",
  storageBucket: "lab2-ph43396.appspot.com",
  messagingSenderId: "497167774407",
  appId: "1:497167774407:web:7f85d9407ab075a28284e2",
  measurementId: "G-H7R9FX61R5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE = getFirestore(FIREBASE_APP);
export const DATABASE= getDatabase(FIREBASE_APP);
export const STORAGE = getStorage(FIREBASE_APP);