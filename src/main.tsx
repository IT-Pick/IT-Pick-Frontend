import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage/HomePage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import Login from './pages/LoginPage/LoginPage';
import Profile from './pages/ProfilePage/ProfilePage';
import ParticipatedDebates from './pages/MyPage/ParticipatedDebate';
import DebateMade from './pages/MyPage/DebateMade';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Profile/>
    <Login/>
    <DebateMade/>
    <ParticipatedDebates/>
    <HomePage/>
    <SignUpPage />
    </BrowserRouter>
  </React.StrictMode>
);
