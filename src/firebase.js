import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDkfapQQughGHc7OwADp1oowQXnlHlThd0",
  authDomain: "fake-discord-aa03a.firebaseapp.com",
  projectId: "fake-discord-aa03a",
  storageBucket: "fake-discord-aa03a.appspot.com",
  messagingSenderId: "511606528650",
  appId: "1:511606528650:web:991e4c0ac85c83a3ee2b73",
  measurementId: "G-WXCDJNQW0P",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
