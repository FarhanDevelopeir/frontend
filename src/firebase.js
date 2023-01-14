// Import the functions you need from the SDKs you need
import * as firebase from './firebase'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA91puGbpEWf4L3OpldCV2eeYl6QxFgtSI",
  authDomain: "tabeeb-login.firebaseapp.com",
  projectId: "tabeeb-login",
  storageBucket: "tabeeb-login.appspot.com",
  messagingSenderId: "236755805917",
  appId: "1:236755805917:web:ea58f8574ef13f014bdd34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase