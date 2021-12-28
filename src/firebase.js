// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDeO-DzGsbiF4tF_CxyiqDE3UzbqpbQnUA",
    authDomain: "clone-6cffd.firebaseapp.com",
    projectId: "clone-6cffd",
    storageBucket: "clone-6cffd.appspot.com",
    messagingSenderId: "970902577169",
    appId: "1:970902577169:web:1b31f89ecd1d592c5a51b0",
    measurementId: "G-L20VFSM73W"
  };
  const firebaseApp= firebase.initializeApp(firebaseConfig );
  const db= firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};