import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcfkwzoNETXIIKxZ9moMbjjE_9cs3AelA",
  authDomain: "clone-f50ae.firebaseapp.com",
  projectId: "clone-f50ae",
  storageBucket: "clone-f50ae.appspot.com",
  messagingSenderId: "644834230684",
  appId: "1:644834230684:web:c96208257b60fa685cc859",
  measurementId: "G-LZX5ZYX515"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };