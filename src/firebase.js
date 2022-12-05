// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBJoMRDjLc6XIl7T3pJWzmqaKrB8r3ZwCM",
    authDomain: "twitter-clone-7755c.firebaseapp.com",
    projectId: "twitter-clone-7755c",
    storageBucket: "twitter-clone-7755c.appspot.com",
    messagingSenderId: "335683645572",
    appId: "1:335683645572:web:1bf1a9e0b9c9b3cb31d2d1",
    measurementId: "G-RCSDL4ZH5P"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const database = firebaseApp.firestore()

export default database;

