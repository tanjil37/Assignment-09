// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxgsxpWLfrn2Lwy_7mzT8YywLBkw88Cpw",
  authDomain: "assignment-09-261e0.firebaseapp.com",
  projectId: "assignment-09-261e0",
  storageBucket: "assignment-09-261e0.firebasestorage.app",
  messagingSenderId: "960587744417",
  appId: "1:960587744417:web:d7182ab0cff9f408081ce0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);