// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZAr2GOGsQ-1s6FOmxyfrU__xekAGI6zg",
  authDomain: "fb-messenger-a6917.firebaseapp.com",
  projectId: "fb-messenger-a6917",
  storageBucket: "fb-messenger-a6917.appspot.com",
  messagingSenderId: "790693087807",
  appId: "1:790693087807:web:88fae2d0f080e856f0868a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
