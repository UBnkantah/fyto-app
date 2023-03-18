// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore"

let firebaseapp = firebase.initializeApp({
  apiKey: "AIzaSyBh7Hf7dEpzEb3q7Hd2v2A5QWV-Ol9vnbQ",
  authDomain: "fyto-app-971c9.firebaseapp.com",
  projectId: "fyto-app-971c9",
  storageBucket: "fyto-app-971c9.appspot.com",
  messagingSenderId: "704189970558",
  appId: "1:704189970558:web:977029d1d6a805c415802f"
});

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

let db = firebaseapp.firestore()

export {db}