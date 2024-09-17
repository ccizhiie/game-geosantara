import React, { useState, useEffect } from "react";
import Loading1 from "../components/loading";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  auth,
} from "../components/firebase-config";
import axios from "axios";
import Swal from "sweetalert2";
import peta from "../assets/peta.svg";
import maskot from "../assets/maskot.svg";
import papan from "../assets/papan.svg";

const Login = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false)

  const RegisterPage = () => {
    navigate("/register");
  };
  // const handleHome = () => {

  // };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress < 100) {
          return oldProgress + 1;
        } else {
        clearInterval(interval);
          setIsLoading(false); // Loading selesai saat progress 100%
          return 100;
        }
      });
    }, 30); // Setiap 50ms progress bertambah 1

    return () => clearInterval(interval); // Cleanup
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true)
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const token = await userCredential.user.getIdToken();


      // Kirim data register ke backend untuk dibuatkan user di Firebase Authentication
      await axios.post('http://localhost:4000/login', { token }).then((res) => {
          console.log('User UID:', res.data);
          const {statusCode, message, data} = res.data
              if(statusCode === 200){
                  console.log(statusCode,message,data);

                  Swal.fire({
                      position: "center",
                      icon: "success",
                      title: "Sign In Success",
                      showConfirmButton: false,
                      timer: 1500
                    });
                  navigate('/home')
              }
          setLoading(false)
      })

  } catch (error) {
      Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Email atau username salah",
        });
      setError('gagal login');
        setLoading(false)
        console.log(error)
  }
  };

  return (
    <div className=" flex justify-center items-center h-screen ">
      <div className="App">
        {isLoading ? (
          <Loading1 progress={progress} />
        ) : (
          <div className="bg-background bg-cover bg-no-repeat bg-center bg-fixed h-screen">
            <div className="relative h-full w-full content-center">
              <div className="">
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
                  <h2 className="text-7xl font-semibold mb-6 text-white">
                    Login
                  </h2>
                  <div className="login-container flex flex-col items-center justify-center min-w-max  w-80  p-6">
                    {error && <p className="error text-black bg-red-500 rounded-md border-2 border-white mb-1">{error}</p>}
                    <form
                      onSubmit={handleLogin}
                      className="w-full flex flex-col justify-center items-center"
                    >
                      <div className="w-full">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full h-14 px-3 py2 border border-gray-400 rounded-xl focus:outline-none focus:border-indigo-500"
                          placeholder="Email"
                        />
                      </div>
                      <div className="w-full mb-7">
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          className="w-full h-14 mt-8 px-3 py2 border border-gray-400 rounded-xl focus:outline-none focus:border-indigo-500"
                          placeholder="password"
                        />
                      </div>
                      <button
                                disabled={loading}
                                    type="submit"
                                    className="w-36 bg-orange-600 text-white p-2 rounded-xl text-2xl"
                                >
                                    {loading ? "loading..." : "Sign in"}
                                </button>
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
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
