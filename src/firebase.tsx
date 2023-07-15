// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE6W2TXtedCPj5ZoKQu2WIyVEBOMD0BIg",
  authDomain: "test-nextjs-d6670.firebaseapp.com",
  projectId: "test-nextjs-d6670",
  storageBucket: "test-nextjs-d6670.appspot.com",
  messagingSenderId: "531537153080",
  appId: "1:531537153080:web:5b1656e3c43845d1baeacd",
  measurementId: "G-KYVPHJTMQX"
};

// Initialize Firebase
const ap = initializeApp(firebaseConfig);
const db = getFirestore(ap);
let analytics;

if (typeof window !== "undefined") {
  // クライアントサイドのみで実行されるコード
  analytics = getAnalytics(ap);
}

export default db;