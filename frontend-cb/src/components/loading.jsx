import React from "react";
import map from "../assets/maploading2.svg";

const Loading = ({ progress }) => {
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center  bg-slate-300 bg-opacity-80 z-50">
      <div>
      </div>
      <div className="mb-5"> 
        <img src={map} alt="map" className="w-80" />
      </div>
      <div>
        <h1 className="mb-5 font-bold text-5xl text-orange-500">
          <span className="text-6xl text-red-600">GEO</span>SANTARA
          </h1>
      </div>
      <div className="w-64 bg-gray-300 rounded-full border-black border-2 h-3 overflow-hidden">
        <div
          className="bg-orange-900 h-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="mt-4 text-lg text-gray-700">{progress}%</p>
    </div>
  );
};

export default Loading;
