import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserContextProvider from './contexts/UserContext';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>
);

reportWebVitals();
