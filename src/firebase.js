// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeObPAU1fzLFTbm7eqpnB4OcBMnpuWy2k",
  authDomain: "twitter-clone-5c27a.firebaseapp.com",
  projectId: "twitter-clone-5c27a",
  storageBucket: "twitter-clone-5c27a.appspot.com",
  messagingSenderId: "1078436695262",
  appId: "1:1078436695262:web:8a8b1da057a7d8e2e3864f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);