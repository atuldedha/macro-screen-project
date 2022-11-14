import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD4PiT_luqaFMUUFPK7KeX-BFIHtG4NqMA",
  authDomain: "infoischia.firebaseapp.com",
  projectId: "infoischia",
  storageBucket: "infoischia.appspot.com",
  messagingSenderId: "443809162378",
  appId: "1:443809162378:web:b4a336a5109964062df973",
  measurementId: "G-E3921B57E5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
