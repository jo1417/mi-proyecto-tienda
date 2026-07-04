import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2YXXYyfgy5D13dVn2LKMep6QYIRlBxu0",
  authDomain: "TU_PROYECTO.firebaseapp.com",
  projectId: "TU_PROYECTO",
  storageBucket: "TU_PROYECTO.firebasestorage.app",
  messagingSenderId: "XXXXXXXX",
  appId: "XXXXXXXX"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);