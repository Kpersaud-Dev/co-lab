// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmM4P6b3BqXpZkh2jAnVpRGCCXSq-LF1Y",
  authDomain: "co-lab-66152.firebaseapp.com",
  projectId: "co-lab-66152",
  storageBucket: "co-lab-66152.appspot.com",
  messagingSenderId: "651047824712",
  appId: "1:651047824712:web:3749a765e5b093ff9bd77d",
  measurementId: "G-F7YXVYWW98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth, app };