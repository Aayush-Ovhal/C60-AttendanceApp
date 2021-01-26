import firebase from 'firebase'
require('@firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyDCeXxmtghK03SrGqIOnYFSPw-6WTDl5wU",
    authDomain: "attendanceapp-13b00.firebaseapp.com",
    databaseURL: "https://attendanceapp-13b00.firebaseio.com",
    projectId: "attendanceapp-13b00",
    storageBucket: "attendanceapp-13b00.appspot.com",
    messagingSenderId: "622426423378",
    appId: "1:622426423378:web:20af2e2c92c39e1ef95f8b"
  };

firebase.initializeApp(firebaseConfig);

export default  firebase.firestore();