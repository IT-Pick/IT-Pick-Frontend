import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage/HomePage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import LoginPage from './pages/LoginPage/LoginPage';
//import SetProfile from './pages/SetProfile/SetProfile';
import ParticipatedDebatesPage from './pages/HistoryPage/ParticipatedDebate';
import DebatePage from './pages/HistoryPage/Debate';
import RankingPage from './pages/RankingPage/RankingPage';
import PwdChangePage from './pages/ChangeInfoPage/PwdChangePage';
import MyPage from './pages/MyPage/MyPage';
import ProfileEditPage from './pages/ChangeInfoPage/ProfileEditPage';
import NewSetProfile from './pages/SetProfile/NewSetProfile';
import SearchPage from './pages/SearchPage/SearchPage';
import AgreementPage from './pages/AgreementPage/AgreementPage';
import NoDataPage from './components/NoDataPage';
import KeywordPage from './pages/KeywordPage/KeywordPage';
import ErrorPage from './pages/ErrorPage/404ErrorPage';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/set-profile" element={<SetProfile />} /> */}
        <Route path="/new-set-profile" element={<NewSetProfile />} />
        <Route path="/participated-debates" element={<ParticipatedDebatesPage />} />
        <Route path="/debate" element={<DebatePage />} />
        <Route path="/ranking" element={<RankingPage />} />
        <Route path="/change-password" element={<PwdChangePage />} />
        <Route path="/my-page" element={<MyPage />} />
        <Route path="/profile-edit" element={<ProfileEditPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path='/agreement' element={<AgreementPage/>} />
        <Route path='/debate-no-data' element={<NoDataPage id={1}/>} />
        <Route path='/participated-debate-no-data' element={<NoDataPage id={2}/>} />
        <Route path='/notification-no-data' element={<NoDataPage id={3}/>} />
        <Route path='/keyword' element={<KeywordPage/>} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  // </React.StrictMode>
);