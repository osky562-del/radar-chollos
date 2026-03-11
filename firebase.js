import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBphY_jaOOOVOzwzfoXE78_iDVOQYRhA2o",
  authDomain: "control-de-gastos-39154.firebaseapp.com",
  projectId: "control-de-gastos-39154",
  storageBucket: "control-de-gastos-39154.firebasestorage.app",
  messagingSenderId: "845236944662",
  appId: "1:845236944662:web:897201644eaf708afd5a37"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs, addDoc };
