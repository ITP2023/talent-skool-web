// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import * as dotenv from "dotenv";


dotenv.config();

const firebaseConfig = {
  apiKey: "AIzaSyAZ3nkB_x9YxX7DDC1uyfCvPckeoAuehIY",
  authDomain: "talentskool-landing.firebaseapp.com",
  projectId: "talentskool-landing",
  storageBucket: "talentskool-landing.appspot.com",
  messagingSenderId: "173273038703",
  appId: "1:173273038703:web:b9121ff9565c997f9cf29a",
  measurementId: "G-5EX5NC50M1"
};


const googleProvider = new GoogleAuthProvider();
googleProvider.addScope("openid");
googleProvider.addScope("https://www.googleapis.com/auth/userinfo.email")
googleProvider.addScope("https://www.googleapis.com/auth/userinfo.profile")

// Initialize Firebase
let app;
try {
app = initializeApp(firebaseConfig);
} catch (e) {
  console.log(e);
}
const auth = getAuth(app);
const db = getFirestore(app);
export { googleProvider, auth, db };