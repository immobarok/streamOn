import { onAuthStateChanged } from "firebase/auth";
import Home from "./pages/Home/Home"
import { useEffect } from 'react';
import { useNavigate } from "react-router";
import { auth } from "./firebase.init";

function App() {

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Logged In");
        navigate('/');
      } else {
        console.log("Logged Out");
        navigate('/login');
      }
    });

    return () => unsubscribe(); 
  }, []);
  


  return (
    <>
      <Home />
    </>
  )
}

export default App
