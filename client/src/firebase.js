// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-71a63.firebaseapp.com",
  projectId: "blog-app-71a63",
  storageBucket: "blog-app-71a63.firebasestorage.app",
  messagingSenderId: "404882692187",
  appId: "1:404882692187:web:4bdee3f8fb6622283bc77e",
  measurementId: "G-P056K07Q5Z"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
