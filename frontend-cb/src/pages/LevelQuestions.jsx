import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LevelQuestions = () => {
  const { levelId } = useParams(); // Mengambil id level dari URL
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0); // Index soal yang aktif
  const [lives, setLives] = useState(3); // Nyawa yang tersisa
  const [timer, setTimer] = useState(15); // Timer per soal
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`/list-level/${levelId}`);
        setQuestions(response.data.soal);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, [levelId]);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    if (timer === 0) {
      handleWrongAnswer();
    }

    return () => clearInterval(countdown);
  }, [timer]);

  const handleWrongAnswer = () => {
    setLives((prevLives) => prevLives - 1);
    if (lives - 1 === 0) {
      navigate('/game-over'); // Navigasi ke halaman game over jika nyawa habis
    } else {
      nextQuestion();
    }
  };

  const handleCorrectAnswer = () => {
    nextQuestion();
  };

  const nextQuestion = () => {
    setTimer(15); // Reset timer untuk soal baru
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate('/level-complete'); // Navigasi ke halaman level complete jika semua soal terjawab
    }
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Level {levelId}</h1>
      <h2>Lives: {lives}</h2>
      <h2>Time left: {timer}</h2>
      <p>{questions[currentQuestion].questionText}</p>
      <button onClick={handleCorrectAnswer}>Correct</button>
      <button onClick={handleWrongAnswer}>Wrong</button>
    </div>
  );
};

export default LevelQuestions;
