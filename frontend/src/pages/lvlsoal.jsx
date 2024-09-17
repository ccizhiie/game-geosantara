import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LevelList = () => {
  const [levels, setLevels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLevels = async () => {
    try {
      const response = await axios.get('/list-level');
      console.log('Response data:', response.data); // Log the response to check its structure
      setLevels(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Levels</h1>
      {levels.length === 0 ? (
        <p>No levels found</p>
      ) : (
        <ul>
          {levels.map((level) => (
            <li key={level.id}>
              <h2>Level ID: {level.id}</h2>
              <p>Total Soal: {level.totalSoal}</p>
              <p>Nyawa: {level.nyawa}</p>
              <p>Timer per Soal: {level.timerPerSoal}</p>
              <h3>Soal:</h3>
              <ul>
                {level.soal.map((soal) => (
                  <li key={soal.id}>
                    <p>Soal ID: {soal.id}</p>
                    <p>{JSON.stringify(soal)}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LevelList;
