import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-4xl font-bold text-blue-600">Home</h2>
    </div>
  );
}

function About() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-4xl font-bold text-blue-600">About</h2>
    </div>
  );
}

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
            <Link to="/about" className="text-white hover:text-gray-300">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
