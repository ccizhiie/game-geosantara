import React, { useState } from 'react';
import axios from 'axios';

const SaveLevel = () => {
  const [totalSoal, setTotalSoal] = useState('');
  const [nyawa, setNyawa] = useState('');
  const [timerPerSoal, setTimerPerSoal] = useState('');
  const [soal, setSoal] = useState([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('/save-level', {
        totalSoal,
        nyawa,
        timerPerSoal,
        soal,
      });
      setMessage('Level created successfully');
    } catch (err) {
      setError('Failed to create level');
    }
  };

  return (
    <div>
      <h1>Save New Level</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Total Soal:</label>
          <input
            type="number"
            value={totalSoal}
            onChange={(e) => setTotalSoal(e.target.value)}
          />
        </div>
        <div>
          <label>Nyawa:</label>
          <input
            type="number"
            value={nyawa}
            onChange={(e) => setNyawa(e.target.value)}
          />
        </div>
        <div>
          <label>Timer per Soal:</label>
          <input
            type="number"
            value={timerPerSoal}
            onChange={(e) => setTimerPerSoal(e.target.value)}
          />
        </div>
        <div>
          <label>Soal (JSON format):</label>
          <textarea
            value={JSON.stringify(soal)}
            onChange={(e) => setSoal(JSON.parse(e.target.value))}
          />
        </div>
        <button type="submit">Save Level</button>
      </form>
      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default SaveLevel;
