// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhEwM9xYk-0ZCGm3JLGCrM4ZY3QtmE3_o",
  authDomain: "vite-contact-6ac28.firebaseapp.com",
  projectId: "vite-contact-6ac28",
  storageBucket: "vite-contact-6ac28.appspot.com",
  messagingSenderId: "167207093229",
  appId: "1:167207093229:web:8f9c7c39338ae10b3e9de4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);