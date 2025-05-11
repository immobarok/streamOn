// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { addDoc, collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyDZiAJoEw5engM-omFD7q8mAjik_hgqBJo",
   authDomain: "streamon-aa06e.firebaseapp.com",
   projectId: "streamon-aa06e",
   storageBucket: "streamon-aa06e.firebasestorage.app",
   messagingSenderId: "265310371361",
   appId: "1:265310371361:web:3e296a8c0fcfba667fad60",
   measurementId: "G-1P2E07QGP9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getFirestore(app)

const signup = async (name, email, password) => {
   try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      const user = res.user;
      await addDoc(collection(db, "user"), {
         uid: user.uid,
         name,
         authProvider: "local",
         email
      })
   } catch (error) {
      console.log(error.message)
   }
}


const login = async (email, password) => {
   try {
      signInWithEmailAndPassword(auth, email, password);
   } catch (error) {
      console.log(error.message);
   }
}

const logout = async () => {
   signOut(auth);
}

export {auth,db,login,signup,logout}