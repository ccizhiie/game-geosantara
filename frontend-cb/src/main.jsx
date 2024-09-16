import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx'
import Home from "./pages/home.jsx"
import Reg from "./pages/register.jsx"
import './index.css'
import LoginPage from './pages/login.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
     <Router>
      <Routes>
        <Route path='/register' element={<Reg />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/' element={<App />}/>
      </Routes>
     </Router>
    
  </StrictMode>,
)