import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfReBWiUEQS-P8qBJ8xMH10QAwrbvAuN0",
  authDomain: "bdprojetovitenatalia.firebaseapp.com",
  projectId: "bdprojetovitenatalia",
  storageBucket: "bdprojetovitenatalia.firebasestorage.app",
  messagingSenderId: "299877044231",
  appId: "1:299877044231:web:a85032554ad4dcf8db1aa2"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Ativa autenticação
export const auth = getAuth(app);