
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyAMatomAPuavvHHxz4840ecCNtW5z6vhqw",
  authDomain: "nepnews-a0901.firebaseapp.com",
  projectId: "nepnews-a0901",
  storageBucket: "nepnews-a0901.firebasestorage.app",
  messagingSenderId: "598728675986",
  appId: "1:598728675986:web:8a1575f06c98d5fafe0c4b",
  measurementId: "G-CYFK7Q6KWY"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
