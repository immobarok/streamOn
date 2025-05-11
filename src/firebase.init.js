import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyDZiAJoEw5engM-omFD7q8mAjik_hgqBJo",
   authDomain: "streamon-aa06e.firebaseapp.com",
   projectId: "streamon-aa06e",
   storageBucket: "streamon-aa06e.appspot.com",
   messagingSenderId: "265310371361",
   appId: "1:265310371361:web:3e296a8c0fcfba667fad60",
   measurementId: "G-1P2E07QGP9"
};

// Init
const app = initializeApp(firebaseConfig);
getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
   const res = await createUserWithEmailAndPassword(auth, email, password);
   const user = res.user;

   await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      email,
      authProvider: "local"
   });
};

const login = (email, password) => {
   return signInWithEmailAndPassword(auth, email, password);
};

const logout = () => signOut(auth);

export { auth, db, login, signup, logout };
