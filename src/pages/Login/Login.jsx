import './Login.css';
import logo from '../../assets/streamOn.png';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { login, signup } from '../../firebase.init';

const Login = () => {
   const [signState, setSignState] = useState("Sign In");
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const navigate = useNavigate();

   const userAuthHandler = async (e) => {
      e.preventDefault();
      try {
         if (signState === 'Sign In') {
            await login(email, password);
            console.log("Login Successful");
         } else {
            await signup(name, email, password);
            console.log("Signup Successful");
         }
         navigate('/');
      } catch (err) {
         console.error("Firebase Auth Error:", err.message);
         alert("⚠️ " + err.message);
      }
   };

   return (
      <div className='login'>
         <img src={logo} className='login-logo' alt="logo" />
         <div className='login-form'>
            <h1>{signState}</h1>
            <form>
               {signState === "Sign Up" && (
                  <input
                     type="text"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     placeholder='Enter full name'
                     required
                  />
               )}
               <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter your email'
                  required
               />
               <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder='Password'
                  required
               />
               <button onClick={userAuthHandler} type='submit'>
                  {signState}
               </button>

               <div className='form-help'>
                  <div className='remember'>
                     <input type="checkbox" id="remember" />
                     <label htmlFor="remember">Remember Me</label>
                  </div>
                  <p>Need Help?</p>
               </div>
            </form>

            <div className="form-switch">
               {signState === "Sign In" ? (
                  <p>
                     New to streamOn? <span onClick={() => setSignState('Sign Up')}>Sign Up Now</span>
                  </p>
               ) : (
                  <p>
                     Already have an account? <span onClick={() => setSignState('Sign In')}>Sign In Now</span>
                  </p>
               )}
            </div>
         </div>
      </div>
   );
};

export default Login;
