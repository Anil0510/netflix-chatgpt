// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQPZ8DU6BnV5Oz3SEKocqtc5zxZ2ixDn4",
  authDomain: "netflix-506d4.firebaseapp.com",
  projectId: "netflix-506d4",
  storageBucket: "netflix-506d4.firebasestorage.app",
  messagingSenderId: "62239797926",
  appId: "1:62239797926:web:90f01defe2519c632c3a67",
  measurementId: "G-CV7L6C66MR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();