// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYIOU5iSl3j6K0vTOTYyswaiaoLLP4hb4",
  authDomain: "raritilandingpage.firebaseapp.com",
  projectId: "raritilandingpage",
  storageBucket: "raritilandingpage.appspot.com",
  messagingSenderId: "607298236400",
  appId: "1:607298236400:web:645b017beb92a158a47735",
  measurementId: "G-CQM12KFPX2",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const storage = getStorage(app);
const auth = getAuth(app);
export { auth };
export { db };
export const firestore = getFirestore(app); // Export the firestore variable
