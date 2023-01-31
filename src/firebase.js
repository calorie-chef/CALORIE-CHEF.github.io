// Import the functions you need from the SDKs you need
var firebase=require("firebase/app");
require('firebase/database');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAks--JpN9WfnJISqRUGysa36qZwBT2XmM",
  authDomain: "caloriechefs-menu.firebaseapp.com",
  databaseURL: "https://caloriechefs-menu-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "caloriechefs-menu",
  storageBucket: "caloriechefs-menu.appspot.com",
  messagingSenderId: "402758522237",
  appId: "1:402758522237:web:bde2a8a41d2f6a71d9e814"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;