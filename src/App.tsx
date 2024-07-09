import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import RangkingPage from './pages/RankingPage/RankingPage';



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ranking" element={<RangkingPage />} />
      </Routes>
    </div>
  );
}

export default App;
