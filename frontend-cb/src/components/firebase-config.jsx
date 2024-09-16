// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDjGKorvHpEaP-X9mcM9-UexbRahwgifQ",
  authDomain: "db-geosantara.firebaseapp.com",
  projectId: "db-geosantara",
  storageBucket: "db-geosantara.appspot.com",
  messagingSenderId: "674036178606",
  appId: "1:674036178606:web:fd340d3acd81c8957b573f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth, signInWithEmailAndPassword, createUserWithEmailAndPassword}