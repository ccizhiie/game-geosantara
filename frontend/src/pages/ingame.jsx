import React from 'react'
import back from '../assets/back.svg'
import papan from '../assets/panpi.svg'
import prof from '../assets/profil.svg'
import foto from '../assets/pgambar.svg'
import ganda from '../assets/psoal.svg'
import { useNavigate } from 'react-router-dom'

const ingame = () => {
  const navigate=useNavigate('');

const handleKlik = () => {
  navigate("/home");
}
const handleGambar = () => {
  navigate("/lvlgambar");
}
const handleSoal = () => {
  navigate("/lvlsoal");
}


  
  return (
    <div className=" flex flex-col h-screen bg-background bg-cover bg-fixed bg-center bg-no-repeat">
        <div className='h-1/3 flex justify-around items-center mb-7'>

          <div className='w-52 '>
            <img src={back} alt="" 
            onClick={handleKlik}
            className='w-20'
            />
          </div>

          <div className='relative flex justify-center items-center'>
          <img src={papan} alt="" 
          className='w-96 '
          />
          <p className='absolute z-10 text-white font-semibold flex justify-center text-center text-5xl w-72 h-20 mb-3'>Pilihan</p>
          </div>

          <div className=''>
          <img src={prof} alt="" 
           className='w-60'
          />
          </div>
        </div>


        <div className='flex justify-around gap-36 items-start h-2/3'>
          <div className='flex justify-end'>
            <img src={foto} alt=""
            onClick={handleGambar} 
            className='w-2/3'
            />
          </div>

          <div className='flex justify-start'>
            <img src={ganda} alt="" 
            onClick={handleSoal}
            className='w-2/3'
            />
          </div>
        </div>
    </div>
  )
}

export default ingame