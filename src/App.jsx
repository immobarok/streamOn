import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router";
import { auth } from "./firebase.init";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("✅ Logged In");
        setUser(currentUser);
        navigate('/');
      } else {
        console.log("Logged Out");
        setUser(null);
        navigate('/login');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]); 
  if (loading) return <p>Loading...</p>;
  return (
    <>
      {user ? <Home /> : <Login />}
    </>
  );
}

export default App;
