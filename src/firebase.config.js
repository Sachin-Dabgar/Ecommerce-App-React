// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyCUqFtuVDHVAn9mfak8AJ7MNrsGAgp8MS0",
    authDomain: "meri-dukaan-49d4a.firebaseapp.com",
    projectId: "meri-dukaan-49d4a",
    storageBucket: "meri-dukaan-49d4a.appspot.com",
    messagingSenderId: "85396411943",
    appId: "1:85396411943:web:24b87cfa1a0390ecf86002",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
