// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmO3pgFnId99hh9e4sPvmVx79NKrAzNQw",
  authDomain: "dgancydiploma7.firebaseapp.com",
  projectId: "dgancydiploma7",
  storageBucket: "dgancydiploma7.appspot.com",
  messagingSenderId: "980798232117",
  appId: "1:980798232117:web:83d51f91fe52be8470037c",
  measurementId: "G-923NNRNJ7R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;