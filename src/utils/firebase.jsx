// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBPQTVyqsmTZQ5xR8ffrjulqk6fHBIpSlU",
  authDomain: "netflix-gpt-45fcb.firebaseapp.com",
  projectId: "netflix-gpt-45fcb",
  storageBucket: "netflix-gpt-45fcb.appspot.com",
  messagingSenderId: "480930971151",
  appId: "1:480930971151:web:c44d3e1af047076971ad7a",
  measurementId: "G-JECZVYGDCF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();