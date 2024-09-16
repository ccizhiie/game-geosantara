import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx'
import Home from "./pages/home.jsx"
import Reg from "./pages/register.jsx"
import Login from "./pages/login.jsx"
import Game from "./pages/ingame.jsx"
import Gambar from "./pages/lvlgambar.jsx"
import Soal from "./pages/lvlsoal.jsx"
import Qsoal from "./pages/quizsoal.jsx"
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
     <Router>
      <Routes>
        <Route path='/register' element={<Reg />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/ingame' element={<Game />}/>
        <Route path='/lvlgambar' element={<Gambar />}/>
        <Route path='/lvlsoal' element={<Soal />}/>
        <Route path='/quizsoal/:id' element={<Qsoal />}/>
        <Route path='/' element={<App />}/>
      </Routes>
     </Router>
    
  </StrictMode>,
)