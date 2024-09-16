import React, { useState } from 'react';
import { signInWithEmailAndPassword, auth } from '../components/firebase-config';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
 
  const RegisterPage = () => {
    navigate("/register");
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const token = await userCredential.user.getIdToken();
  
      // Kirim token ke backend Express.js untuk verifikasi
      const response = await axios.post('http://localhost:4000/verifyToken', { token });
      console.log('User UID:', response.data.uid);
  
      // Jika verifikasi berhasil, navigasi ke halaman home
      alert('Login successful!');
      navigate("/home"); 
    } catch (error) {
      setError('Login failed. Please check your credentials.');
    }
  };
  

  return (
    <div className="login-container bg-gray-500" >
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
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
        <button type="submit" onClick={handleLogin}>Login</button>
        <p className="text-white mt-4">
        belum pernah login?
            <span
                          onClick={RegisterPage}
                          className="text-sky-400 animate-none cursor-pointer"
                        >
                          Daftar
                        </span>
                      </p>
      </form>
    </div>
  );
};

export default LoginPage;