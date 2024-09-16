import React from 'react'
import { useParams } from 'react-router-dom';

const qiuzsoal = () => {
  const { id } = useParams(); // Mengambil parameter id dari URL

  return (
    <div>
      <img src="" alt="dfcgvbh" />
      <h1>Soal ke-{id}</h1>
      {/* Tambahkan konten soal berdasarkan id */}
    </div>
  );
};
export default qiuzsoal