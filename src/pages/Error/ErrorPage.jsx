import React from 'react';
import './ErrorPage.css';

const ErrorPage = ({ errorCode = 404, errorMessage = "Page Not Found" }) => {
   return (
      <div className="error-container">
         <div className="error-content">
            <div className="error-graphic">
               <div className="error-number">{errorCode}</div>
               <div className="error-icon">😕</div>
            </div>
            <h1 className="error-title">Oops!</h1>
            <p className="error-message">{errorMessage}</p>
            <p className="error-description">
               The page you're looking for doesn't exist or another error occurred.
            </p>
            <div className="error-actions">
               <a href="/" className="home-button">Go to Homepage</a>
               <button className="back-button" onClick={() => window.history.back()}>
                  Go Back
               </button>
            </div>
         </div>
      </div>
   );
};

export default ErrorPage;