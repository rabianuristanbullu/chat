// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACWNyyKsPnm-tWQN-GiY8uHkT-u1RCdGM",
  authDomain: "chat-cb6cf.firebaseapp.com",
  projectId: "chat-cb6cf",
  storageBucket: "chat-cb6cf.appspot.com",
  messagingSenderId: "1019372944804",
  appId: "1:1019372944804:web:8a1862552a6f5ff6115531",
  measurementId: "G-QLL1DBPRYN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth= getAuth(app)
export const provider = new GoogleAuthProvider
export const db = getFirestore(app);