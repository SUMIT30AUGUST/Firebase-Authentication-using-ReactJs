import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDevPePm0tYW87tkWX8JH4mQcE21i43b7U",
  authDomain: "fir-auth-2000.firebaseapp.com",
  projectId: "fir-auth-2000",
  storageBucket: "fir-auth-2000.appspot.com",
  messagingSenderId: "73940509803",
  appId: "1:73940509803:web:630bc8216ac37477b07d2e",
  measurementId: "G-XQT28YPQSW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth=getAuth();
export {app,auth};