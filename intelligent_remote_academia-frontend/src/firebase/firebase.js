import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyBN_ZU090HSX36yzzei8ME00TA_EyV7c2o",
  authDomain: "ira-chat.firebaseapp.com",
  projectId: "ira-chat",
  storageBucket: "ira-chat.appspot.com",
  messagingSenderId: "667253532102",
  appId: "1:667253532102:web:b3e10cb498046f03bfbec7",
});

const firestore = firebase.firestore();

export default firestore;
