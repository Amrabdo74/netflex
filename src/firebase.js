/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMIN,
  projectId: import.meta.env.VITE_REACT_APP_FIREBASE_API_KE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_API_KE_STORE_BUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_APP_FIREBASE_API_KE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_REACT_APP_FIREBASE_API_KE_APP_ID,
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
