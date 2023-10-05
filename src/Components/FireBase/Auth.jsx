// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2noG4TzZsyELZ49fEAuNxNCsjuaVPohc",
  authDomain: "dragon-news-5b0a3.firebaseapp.com",
  projectId: "dragon-news-5b0a3",
  storageBucket: "dragon-news-5b0a3.appspot.com",
  messagingSenderId: "361957764742",
  appId: "1:361957764742:web:1d3bcc0636752bd3f8ab07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {auth};