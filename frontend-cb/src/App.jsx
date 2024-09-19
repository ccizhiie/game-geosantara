
// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from "./pages/login"
import Home from "./pages/home.jsx";
import Reg from "./pages/register.jsx";
import Login from "./pages/login.jsx";
import Game from "./pages/ingame.jsx";
import LevelsGrid from "./pages/LevelsGrid.jsx";
import LevelQuestions from "./pages/LevelQuestions.jsx";


const App = () => {
  
  return (
    
    <Router>
      <Routes>
        <Route path='/register' element={<Reg />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/ingame' element={<Game />} />
        <Route path='/LevelsGrid' element={<LevelsGrid />} />
        <Route path='/LevelQuestions' element={<LevelQuestions />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
