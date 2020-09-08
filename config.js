import firebase from 'firebase'
require ('@firebase/firestore');
var firebaseConfig = {
    apiKey: "AIzaSyB3MKfgHRj_WwOeYfJYqLBMwTsoafPmAX4",
    authDomain: "book-santa-app-c8cef.firebaseapp.com",
    databaseURL: "https://book-santa-app-c8cef.firebaseio.com",
    projectId: "book-santa-app-c8cef",
    storageBucket: "book-santa-app-c8cef.appspot.com",
    messagingSenderId: "16288177577",
    appId: "1:16288177577:web:ee30556fc2c6f7a772f8b8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()