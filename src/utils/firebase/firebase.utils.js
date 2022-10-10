// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPKEvWX4G5WwEc_3N401ouBO6zryV3-zs",
  authDomain: "crwnclothingv2shafinul98.firebaseapp.com",
  projectId: "crwnclothingv2shafinul98",
  storageBucket: "crwnclothingv2shafinul98.appspot.com",
  messagingSenderId: "1064746619940",
  appId: "1:1064746619940:web:78d5a43a5771d8f900f4b1",
  measurementId: "G-K9N0SVE55H",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
};
