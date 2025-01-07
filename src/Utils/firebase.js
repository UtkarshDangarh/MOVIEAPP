// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "API-KEY",
  authDomain: "movie-app-eb0cc.firebaseapp.com",
  projectId: "movie-app-eb0cc",
  storageBucket: "movie-app-eb0cc.appspot.com",
  messagingSenderId: "424504220840",
  appId: "1:424504220840:web:3913db8c8f47a710e2b69d",
  measurementId: "G-KLQ8X6VMKW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
