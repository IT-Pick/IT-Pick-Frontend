import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import RangkingPage from './pages/RankingPage/RankingPage';



function App() {
  return (
    <div>
      <nav className="bg-blue-500 p-4">
        <ul className="flex space-x-4 justify-center">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/ranking" className="text-white hover:text-gray-300">
              Ranking
            </Link>
          </li>
        </ul>
      </nav>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ranking" element={<RangkingPage />} />
      </Routes>
    </div>
  );
}

export default App;
