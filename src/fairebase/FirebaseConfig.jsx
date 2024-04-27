
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDy9cgKPHHr1W6TJyTV2naQ7jUzaoub1_I",
  authDomain: "ema-john-with-firebase-a-91e2f.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-91e2f",
  storageBucket: "ema-john-with-firebase-a-91e2f.appspot.com",
  messagingSenderId: "41837977709",
  appId: "1:41837977709:web:9c65d9d5ca926337a21f64"
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
const storage = getStorage(app);
export { fireDB, auth, storage };