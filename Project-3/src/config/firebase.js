// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtOl4VjOQIzsk0c_Hgd5VQ-6KAJljtLl0",
  authDomain: "vite-contact-18dde.firebaseapp.com",
  projectId: "vite-contact-18dde",
  storageBucket: "vite-contact-18dde.firebasestorage.app",
  messagingSenderId: "399377277638",
  appId: "1:399377277638:web:dd76d960d4222cf07aadc7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
