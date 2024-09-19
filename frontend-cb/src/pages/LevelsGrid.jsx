import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LevelsGrid = () => {
  const [levels, setLevels] = useState([]);
  const navigate = useNavigate(); // Menggunakan useNavigate untuk navigasi

  useEffect(() => {
    const fetchLevels = async () => {
      try {
        const response = await axios.get('/list-level');
        setLevels(response.data);
      } catch (error) {
        console.error('Error fetching levels:', error);
      }
    };

    fetchLevels();
  }, []);

  const handleLevelClick = (levelId) => {
    // Mengarahkan pengguna ke halaman soal dari level tertentu
    navigate(`/level/${levelId}`);
  };

  return (
    <div className="level-list">
      {levels.map((level, index) => (
        <div
          key={level.id}
          className="level-dot"
          onClick={() => handleLevelClick(level.id)}
          style={{ display: 'inline-block', margin: '10px', cursor: 'pointer' }}
        >
          {/* Menampilkan level dalam bentuk titik */}
          <span>Level {index + 1}</span>
        </div>
      ))}
    </div>
  );
};

export default LevelsGrid;
