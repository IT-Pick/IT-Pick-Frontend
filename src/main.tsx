import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import ProfileEditPage from './pages/ProfilePage/ProfileEditPage';
import HomePage from './pages/HomePage/HomePage';
import MyPage from './pages/MyPage/MyPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import Login from './pages/LoginPage/LoginPage';
import Profile from './pages/ProfilePage/ProfilePage';
import ParticipatedDebates from './pages/MyPage/ParticipatedDebate';
import Debate from './pages/MyPage/Debate';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <ProfileEditPage />
    <Profile/>
    <Login/>
    <Debate/>
    <ParticipatedDebates/>
    <HomePage/>
    <MyPage />
    <SignUpPage />
    </BrowserRouter>
  </React.StrictMode>
);
