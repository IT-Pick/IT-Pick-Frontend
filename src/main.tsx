import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage/HomePage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import Login from './pages/LoginPage/LoginPage';
import Profile from './pages/ProfilePage/ProfilePage';
import ParticipatedDebates from './pages/HistoryPage/ParticipatedDebate';
import Debate from './pages/HistoryPage/Debate';
import RankingPage from './pages/RankingPage/RankingPage';
import PwdChangePage from './pages/ChangeInfoPage/PwdChangePage';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Profile/>
    <Login/>
    <Debate/>
    <ParticipatedDebates/>
    <HomePage/>
    <RankingPage/>
    <SignUpPage />
    <PwdChangePage />
    </BrowserRouter>
  </React.StrictMode>
);