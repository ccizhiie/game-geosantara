import React from "react";
import Swal from 'sweetalert2'
import char from "../assets/maskotloby.svg"
import prof from "../assets/profil.svg"
import but from "../assets/bgbuton.svg"
import back from "../assets/back.svg"
import { useNavigate } from "react-router-dom";

const home = () => {
  const navigate = useNavigate();

  const handleKlik = () => {
    Swal.fire({
      title: "yey!!!...",
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "#fff url(/images/trees.png)",
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://media.tenor.com/zCF6q06kvS8AAAAj/ddd.gif")
        left top
        no-repeat
      `
    });
  };

   const handleOpt = () => {
      navigate("/ingame")
   }

  return (
    <div className="flex  h-screen bg-background bg-cover bg-fixed bg-center bg-no-repeat">
      
    
      <div className="w-2/3 flex flex-col justify-center  gap-16  mb-11 ml-20">
          <div className="">
          <img src={back} alt="back"
          className="w-20 "
           />
          </div>
          <div className="flex justify-end mr-20 mb-10">
          <img src={char} alt="character" 
           className="w-3/4"
          />
          </div>
          {/* <div>
          <img src={logout} alt="character" 
           className=""
          />
          </div> */}

      </div>
      <div className="w-1/3 flex flex-col gap-28 items-center h-screen justify-center ml-20">
          <div>
          <img src={prof} alt="" 
          className="w-60"
          />
          </div>
          <div className="w-full flex flex-col gap-5 mb-16">
            <div className="relative flex justify-center items-center">
            <img src={but} alt=""  className="w-56"/>
            <p  onClick={handleOpt} className="absolute z-10 text-white text-5xl h-14 w-52 mb-8 text-center cursor-pointer">PLAY</p>
            </div>
            <div className="relative flex justify-center items-center">
            <img src={but} alt=""  className="w-56"/>
            <p className="absolute z-10 text-white text-5xl h-14 w-30 mb-8 mr-4 text-center cursor-pointer">info</p>
            </div>
            <div className="relative flex justify-center items-center">
            <img src={but} alt="" className="w-56"/>
            <p  onClick={handleKlik}  className="absolute z-10 text-white text-5xl h-14 w-52 mb-8 text-center cursor-pointer">EXIT</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default home;
{/* <button onClick={handleKlik} className="absolute z-10 text-white text-5xl h-24 w-52">PLAY</button> */}