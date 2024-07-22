import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage/HomePage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import Login from './pages/LoginPage/LoginPage';
import Profile from './pages/ProfilePage/ProfilePage';
import ParticipatedDebates from './pages/MyPage/ParticipatedDebate';
import Debate from './pages/MyPage/Debate';
import RankingPage from './pages/RankingPage/RankingPage';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <RankingPage/>
    <Profile/>
    <Login/>
    <Debate/>
    <ParticipatedDebates/>
    <HomePage/>
    <SignUpPage />
    </BrowserRouter>
  </React.StrictMode>
);
