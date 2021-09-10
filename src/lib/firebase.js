import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import { seedDatabase } from '../seed'; //One time run

const config = {
    apiKey: "AIzaSyA136Gtftk4NqbJ-nYSRSNaqtNnlVAYfXw",
    authDomain: "instagram-75961.firebaseapp.com",
    projectId: "instagram-75961",
    storageBucket: "instagram-75961.appspot.com",
    messagingSenderId: "265318722617",
    appId: "1:265318722617:web:7dc1cfa18559e7ece1f1e8"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase); // One time run

export { firebase, FieldValue };