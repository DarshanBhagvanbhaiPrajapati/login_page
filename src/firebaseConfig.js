// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBftZinI9K7JvcPjhlCyZJY--IWAuKrSEs",
  authDomain: "loginpage-be662.firebaseapp.com",
  projectId: "loginpage-be662",
  storageBucket: "loginpage-be662.appspot.com",
  messagingSenderId: "103704858909",
  appId: "1:103704858909:web:c495d717f09899c09691f4",
  measurementId: "G-56VM8KD4FD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, analytics, createUserWithEmailAndPassword, signInWithEmailAndPassword };
