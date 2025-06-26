import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwirtbAO4pkIcGnEP7RvmvRcLgIlq6Wk8",
  authDomain: "rhproyecto-649d4.firebaseapp.com",
  projectId: "rhproyecto-649d4",
  storageBucket: "rhproyecto-649d4.firebasestorage.app",
  messagingSenderId: "218607461256",
  appId: "1:218607461256:web:12badc4fa46385ed3bd03d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db};  