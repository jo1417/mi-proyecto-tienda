import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


//  ES LA CONFIGURACION E INICIALIZACION DE LA CONEXION A FIREBASE

const firebaseConfig = {
  apiKey: "AIzaSyD2YXXYyfgy5D13dVn2LKMep6QYIRlBxu0",
  authDomain: "tiendaweb0-24e43.firebaseapp.com",
  projectId: "tiendaweb0-24e43",
  storageBucket: "tiendaweb0-24e43.firebasestorage.app",
  messagingSenderId: "475239881600",
  appId: "1:475239881600:web:8cf1508c11ed3a9fb1bf65"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);