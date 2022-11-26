// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmxP6NhGQX9eKzANtFl-Dl-o3FWDOo1Es",
  authDomain: "chat-app-20237.firebaseapp.com",
  projectId: "chat-app-20237",
  storageBucket: "chat-app-20237.appspot.com",
  messagingSenderId: "108729692836",
  appId: "1:108729692836:web:6be2e9df3c764ada516c31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);