// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirebase} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1LRaoi480u-PLZpdbkcz-BqzYyT2OIpQ",
  authDomain: "flashcardsaas-5a83f.firebaseapp.com",
  projectId: "flashcardsaas-5a83f",
  storageBucket: "flashcardsaas-5a83f.appspot.com",
  messagingSenderId: "165323672670",
  appId: "1:165323672670:web:038c0f45fe83319612f8cf",
  measurementId: "G-PVTZGYEPQH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirebase(app)

export {db}