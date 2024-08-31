// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// web app configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBUEr7yM_H06Q5iaFaLQA8DvKrf27lW_E",
  authDomain: "github-repo-evolution.firebaseapp.com",
  projectId: "github-repo-evolution",
  storageBucket: "github-repo-evolution.appspot.com",
  messagingSenderId: "108011977739",
  appId: "1:108011977739:web:bb2b6c966f48c0466e1b0e",
  measurementId: "G-9T1YZJLLRQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export {app,auth}