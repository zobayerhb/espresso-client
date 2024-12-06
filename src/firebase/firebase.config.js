import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjeUYTVwnVaLgbBl4IJ11lPBXjsTzi4RQ",
  authDomain: "fire-concepual2.firebaseapp.com",
  projectId: "fire-concepual2",
  storageBucket: "fire-concepual2.firebasestorage.app",
  messagingSenderId: "711862776851",
  appId: "1:711862776851:web:6d5aaf06713db6f28a7be6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)