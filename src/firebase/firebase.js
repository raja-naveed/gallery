import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBsBXabRipn8o6xqXvf8RNkpUAqsbDyn3I",
    authDomain: "gallery-f26b7.firebaseapp.com",
    projectId: "gallery-f26b7",
    storageBucket: "gallery-f26b7.appspot.com",
    messagingSenderId: "781818722764",
    appId: "1:781818722764:web:17bec6a88cebcdf6a3c569"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
