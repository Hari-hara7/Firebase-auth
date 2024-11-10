// src/firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCp7culM97yeWN2GFZjk47sqlu0YaHQR2o",
    authDomain: "tail-44bd6.firebaseapp.com",
    projectId: "tail-44bd6",
    storageBucket: "tail-44bd6.firebasestorage.app",
    messagingSenderId: "92562125471",
    appId: "1:92562125471:web:ad0a18b87856a9a5a1a8aa"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export {
  auth,
  googleProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
};





