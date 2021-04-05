import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCId8Wt0YJgZGxBhNbFPI5bBY4Nn6A7F50",
    authDomain: "discord-clone-aa115.firebaseapp.com",
    databaseURL: "https://discord-clone-aa115.firebaseio.com",
    projectId: "discord-clone-aa115",
    storageBucket: "discord-clone-aa115.appspot.com",
    messagingSenderId: "936062674523",
    appId: "1:936062674523:web:69238438fff53f4c8f017e",
    measurementId: "G-JJRM3W32E0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;