import React from 'react';
import ReactDOM from 'react-dom/client';
import { topbar } from 'react-router-loading';
import App from './App';
import UserContextProvider from './contexts/UserContext';
import reportWebVitals from './reportWebVitals';

topbar.config({
  autoRun: true,
  barThickness: 5,
  barColors: {
    0: '#C8AD7F',
    1: '#C8AD7F'
  },
  shadowBlur: 3,
  shadowColor: '#C8AD7F',
  className: 'topbar'
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>
);

reportWebVitals();
