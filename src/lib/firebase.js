import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import { seedDatabase } from '../seed'; //One time run

const config = {
    apiKey: "", // Confidential
    authDomain: "instagram-75961.firebaseapp.com",
    projectId: "instagram-75961",
    storageBucket: "instagram-75961.appspot.com",
    messagingSenderId: "265318722617",
    appId: ""
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase); // One time run

export { firebase, FieldValue };