import React, { createContext, useState, useContext } from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from '../assets/spinner.json';

const SpinnerContext = createContext();

export const SpinnerProvider = ({ children }) => {
   const [loading, setLoading] = useState(false);

   return (
      <SpinnerContext.Provider value={{ loading, setLoading }}>
         {loading && (
            <div style={spinnerStyle}>
               <Lottie animationData={loadingAnimation} loop={true} style={{ height: 250 }} />
            </div>
         )}
         {children}
      </SpinnerContext.Provider>
   );
};

export const useSpinner = () => useContext(SpinnerContext);

const spinnerStyle = {
   position: 'fixed',
   top: 0,
   left: 0,
   width: '100vw',
   height: '100vh',
   backgroundColor: 'rgba(0,0,0,0.6)',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   zIndex: 9999,
};
