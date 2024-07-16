import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import './index.css';
import DebateMade from './pages/MyPage/DebateMade';
import ParticipatedDebates from './pages/MyPage/ParticipatedDebate';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <DebateMade/>
      <ParticipatedDebates/>
      <HomePage/>
      <SignUpPage />
    </BrowserRouter>
  </React.StrictMode>
);
