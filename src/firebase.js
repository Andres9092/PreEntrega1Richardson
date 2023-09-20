// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrbfAbVE9s5z0LCI29ATkFWNxu4RBbbqc",
  authDomain: "enjoyingdecoproject.firebaseapp.com",
  projectId: "enjoyingdecoproject",
  storageBucket: "enjoyingdecoproject.appspot.com",
  messagingSenderId: "274338518777",
  appId: "1:274338518777:web:8b37b1e55e3c194e0eb428",
  measurementId: "G-LVDJD5K69B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth  = getAuth(app)

const analytics = getAnalytics(app);