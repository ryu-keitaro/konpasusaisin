import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBE6W2TXtedCPj5ZoKQu2WIyVEBOMD0BIg",
  authDomain: "test-nextjs-d6670.firebaseapp.com",
  projectId: "test-nextjs-d6670",
  storageBucket: "test-nextjs-d6670.appspot.com",
  messagingSenderId: "531537153080",
  appId: "1:531537153080:web:5b1656e3c43845d1baeacd",
  measurementId: "G-KYVPHJTMQX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;