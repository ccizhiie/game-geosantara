import React from 'react'
import { points } from '../components/pointlvl'
import { useNavigate } from 'react-router-dom'

const lvlgambar = () => {
  const navigate=useNavigate("");

 
  return (
    <div className="relative w-full h-screen overflow-hidden bg-background2">
     <div className="relative w-full h-screen overflow-hidden">

      {points.map((point, index) => (
        <div
          key={index}
          className="absolute w-8 h-8 bg-purple-700 rounded-full flex items-center justify-center text-white font-bold"
          style={{ left: point.left, top: point.top }}
        >
          {index + 1}
        </div>
      ))}
    </div>
  </div>
  )
}

export default lvlgambar