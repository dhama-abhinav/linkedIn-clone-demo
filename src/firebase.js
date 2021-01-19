// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDc1rm278e3rb0Qu0X60Rfdzyah1yYSZzI",
    authDomain: "linkedin-clone-866ba.firebaseapp.com",
    projectId: "linkedin-clone-866ba",
    storageBucket: "linkedin-clone-866ba.appspot.com",
    messagingSenderId: "358682436792",
    appId: "1:358682436792:web:3bf96bcd47223346f9c04d",
    measurementId: "G-4BCXR5QTEN"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

// we need db and auth variable outside in diferent files ,, for that we need to export them 

export {db , auth}