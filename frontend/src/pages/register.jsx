import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import peta from "../assets/peta.svg";
import maskot from "../assets/maskot.svg";
import papan from "../assets/papan.svg";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false)




  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      // Kirim data register ke backend untuk dibuatkan user di Firebase Authentication
      await axios.post('http://localhost:4000/register', {
        email,
        password,
    }).then((res) => {
        const {statusCode, message, data} = res.data
        if(statusCode === 200){
            console.log(statusCode,message,data);

            Swal.fire({
                position: "center",
                icon: "success",
                title: "Sign Up Success",
                showConfirmButton: false,
                timer: 1500
              });
              navigate("/login")
        }
        setLoading(false)
    })
} catch (error) {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message
      });
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="bg-background bg-cover bg-no-repeat bg-center bg-fixed h-screen">
       <div className="relative h-full w-full content-center">
              <div className="relative">
                <img
                  src={peta}
                  alt="ada"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="right-96">
                <img
                  src={maskot}
                  alt="maskot"
                  className="absolute z-20 top-1/2 right-60  -translate-y-1/2 w-72"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={papan}
                  alt="papan"
                  className="absolute z-10 top-1/2 left-44 -translate-y-1/2  w-full max-w-xl h-auto "
                />
      <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 z-20 p-6 flex flex-col  justify-center items-center">
        <h2 className="text-7xl font-semibold mb-6 text-white">Register</h2>
        <div className="login-container flex flex-col items-center justify-center min-w-max  w-80  p-6">
        <form onSubmit={handleRegister}
        className='w-full flex flex-col justify-center items-center'
        >
        {error && <p className="error">{error}</p>}
        <div className="w-full">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder='Email'
            className="w-full h-14 px-3 py2 border border-gray-400 rounded-xl focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className='w-full mb-7'>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder='password'
            className="w-full h-14 px-3 mt-8 py2 border border-gray-400 rounded-xl focus:outline-none focus:border-indigo-500"
          />
        </div>
        <button
                                disabled={loading}
                                type="submit"
                               className="w-36 bg-orange-600 text-white p-2 rounded-xl text-2xl"
                             >
                                {loading ? "Loading..." : "Sign up"}
                             </button>
      </form>
      </div>  
    </div>
    </div>
    </div>
    </div>
  );
};

export default RegisterPage;