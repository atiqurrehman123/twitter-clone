import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBL2oitIF70JYyfNjpcoe3wU2CXwg23B7g",
  authDomain: "twitter-clone-21f92.firebaseapp.com",
  databaseURL: "https://twitter-clone-21f92.firebaseio.com",
  projectId: "twitter-clone-21f92",
  storageBucket: "twitter-clone-21f92.appspot.com",
  messagingSenderId: "601441014121",
  appId: "1:601441014121:web:728da97177d912b1092df8",
  measurementId: "G-HC6F9NXRRL",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

//we use  db firebase for accessing data;
const db = firebaseApp.firestore();

export default db;
