// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGw1ai-zgzJI_pUDlL4Dfh901fDgLxq24",
  authDomain: "digital-education-website.firebaseapp.com",
  projectId: "digital-education-website",
  storageBucket: "digital-education-website.appspot.com",
  messagingSenderId: "559686565896",
  appId: "1:559686565896:web:d7a8e27e67cc67cb9851bd",
  measurementId: "G-712X4261FC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;