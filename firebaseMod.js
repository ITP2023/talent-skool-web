// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  // apiKey: process.env.FIREBASE_API_KEY,
  // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.FIREBASE_PROJECT_ID,
  // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.FIREBASE_APP_ID,
  // measurementId: process.env.FIREBASE_MEASUREMENT_ID
  apiKey: "AIzaSyAZ3nkB_x9YxX7DDC1uyfCvPckeoAuehIY",
  authDomain: "talentskool-landing.firebaseapp.com",
  projectId: "talentskool-landing",
  storageBucket: "talentskool-landing.appspot.com",
  messagingSenderId: "173273038703",
  appId: "1:173273038703:web:b9121ff9565c997f9cf29a",
  measurementId: "G-5EX5NC50M1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };