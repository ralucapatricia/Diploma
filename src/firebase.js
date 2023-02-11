import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCv2mWAREHL1NeSveVSUZ9Vfg6G9fTcXmM",
  authDomain: "sport-base-18c43.firebaseapp.com",
  projectId: "sport-base-18c43",
  storageBucket: "sport-base-18c43.appspot.com",
  messagingSenderId: "244011428452",
  appId: "1:244011428452:web:b01dc10b29c4bdcd454d71"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export default app
