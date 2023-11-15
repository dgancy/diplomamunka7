import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDmO3pgFnId99hh9e4sPvmVx79NKrAzNQw",
  authDomain: "dgancydiploma7.firebaseapp.com",
  projectId: "dgancydiploma7",
  storageBucket: "dgancydiploma7.appspot.com",
  messagingSenderId: "980798232117",
  appId: "1:980798232117:web:83d51f91fe52be8470037c",
  measurementId: "G-923NNRNJ7R",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app as default };