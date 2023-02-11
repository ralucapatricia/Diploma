import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCpbVWjGldWk3DG8Pn3zUPjw5_LunmIPeI",
    authDomain: "sportbasesupt.firebaseapp.com",
    databaseURL: "https://sportbasesupt-default-rtdb.firebaseio.com",
    projectId: "sportbasesupt",
    storageBucket: "sportbasesupt.appspot.com",
    messagingSenderId: "192205599225",
    appId: "1:192205599225:web:a3ec74dc8eaa579d938d28"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app
