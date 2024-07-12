import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <SignUpPage />
    </BrowserRouter>
  </React.StrictMode>
);
