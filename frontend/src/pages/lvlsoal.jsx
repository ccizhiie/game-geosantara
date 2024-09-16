import React from 'react'
import { useNavigate } from 'react-router-dom';
import { points } from '../components/pointlvl'; 

const lvlsoal = () => {

  const navigate=useNavigate();

  const goToSoal = (id) => {
    navigate(`/quizsoal/${id}`); // Navigasi ke halaman soal dengan id tertentu
  };
 

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background2">
     <div className="relative w-full h-screen overflow-hidden">

     {points.map((point, index) => (
          <div
            key={index}
            className="absolute w-8 h-8 bg-purple-700 rounded-full flex items-center justify-center text-white font-bold"
            style={{ left: point.left, top: point.top }}
            onClick={() => goToSoal(index + 1)}
          >
            {index + 1}
          </div>
        ))}
    </div>
  </div>
  )
}

export default lvlsoal