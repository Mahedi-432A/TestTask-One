// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV7oEUDYSeigZD5qwtHj1dVnVOpC-_Lt0",
  authDomain: "espresso-emporium-996f0.firebaseapp.com",
  projectId: "espresso-emporium-996f0",
  storageBucket: "espresso-emporium-996f0.firebasestorage.app",
  messagingSenderId: "91429651987",
  appId: "1:91429651987:web:15d95bee599523253da1e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };