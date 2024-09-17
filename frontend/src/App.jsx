import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LevelList from './pages/lvlsoal'; // Ensure the path and file name are correct

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/levels" element={<LevelList />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
