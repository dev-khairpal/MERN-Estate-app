// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-b3e0b.firebaseapp.com",
  projectId: "mern-estate-b3e0b",
  storageBucket: "mern-estate-b3e0b.firebasestorage.app",
  messagingSenderId: "440694970677",
  appId: "1:440694970677:web:4deb76543f181ea93e147c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);