import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Kirim data register ke backend untuk dibuatkan user di Firebase Authentication
      const response = await axios.post('http://localhost:4000/register', {
        email,
        password,
      });
      console.log('User UID:', response.data.uid);

      alert('Registration successful!');
      navigate("/login");
    } catch (error) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="register-container bg-gray-500">
      <form onSubmit={handleRegister}>
        <h2>Register</h2>
        {error && <p className="error">{error}</p>}
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" onClick={handleRegister}>Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;