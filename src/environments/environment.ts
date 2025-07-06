// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiJ9HMAi7n6vUTqL93kH97m3asJ4BfcxM",
  authDomain: "kissan-75c1d.firebaseapp.com",
  projectId: "kissan-75c1d",
  storageBucket: "kissan-75c1d.firebasestorage.app",
  messagingSenderId: "790751710232",
  appId: "1:790751710232:web:c48aff0cd51331f978c76d",
  measurementId: "G-MP4QCYKRCJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);