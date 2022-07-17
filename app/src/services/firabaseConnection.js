// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore'
import "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  // Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6hF7sbG-XL7qfiUfYIkPGHFm0BleP61s",
  authDomain: "notepad-ae914.firebaseapp.com",
  projectId: "notepad-ae914",
  storageBucket: "notepad-ae914.appspot.com",
  messagingSenderId: "493568593870",
  appId: "1:493568593870:web:24719dc1de53490df5659f"
};

// Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);}
export default firebase

