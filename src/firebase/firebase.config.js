/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCld1lrY4qs1b7_d28Elbze2yDKfB98H7w",
  authDomain: "booktopia-2c12b.firebaseapp.com",
  projectId: "booktopia-2c12b",
  storageBucket: "booktopia-2c12b.firebasestorage.app",
  messagingSenderId: "636290357902",
  appId: "1:636290357902:web:3cd1c2cc6f346e1c7b87df",
  measurementId: "G-DL00JRS8YK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
