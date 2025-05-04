import React from 'react'
import './Login.css'
const Login = () => {
   return (
      <div className='login'>
         <p className='logo'></p>
         <div className='login-form'>
            <h1>Sign Up </h1>
            <form action="">
               <input type="text" placeholder='Enter full name' />
               <input type="email" placeholder='Enter your email' />
               <input type="password" placeholder='Password' />
               <button>Sign Up</button>
               <div className='form-help'>
                  <div className='remember'>
                     <input type="checkbox" id="remember" />
                     <label htmlFor="">Remember Me </label>
                  </div>
                  <p>Need help?</p>
               </div>
            </form>
         </div>
      </div>
   )
}

export default Login