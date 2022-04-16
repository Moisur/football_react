// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlxO2EZ62-YJVas59rsTxIVvlV-wUD5nk",
  authDomain: "foodball-6ef7c.firebaseapp.com",
  projectId: "foodball-6ef7c",
  storageBucket: "foodball-6ef7c.appspot.com",
  messagingSenderId: "68661898204",
  appId: "1:68661898204:web:662ae29bbf841ca9e63d19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth;