// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJYn_6bQ3gF4pHck1FP8a428afBacoMD8",
  authDomain: "krishi-mitra-ef403.firebaseapp.com",
  projectId: "krishi-mitra-ef403",
  storageBucket: "krishi-mitra-ef403.firebasestorage.app",
  messagingSenderId: "236052327449",
  appId: "1:236052327449:web:6c25a11bf3c869ed65ce88",
  measurementId: "G-TE2PYHRSQZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);