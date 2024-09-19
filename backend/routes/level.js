const admin = require('../firebase-config'); // Mengimpor konfir Firebase untuk mengakses Firestore
const { generateId } = require('../services/generateId'); // import fungsi generateId untuk membuat ID unique

// Fungsi utama yang menerima parameter app (instance Express)
const level = (app) => {

    // Endpoint GET untuk mengambil semua data level dan soal
    app.get('/list-level', async (req, res) => {
      try {
        const db = admin.firestore(); // Inisialisasi Firestore dari admin Firebase

        // get semua dokumen dari koleksi 'Levels'
        const levelsSnapshot = await db.collection('Levels').get();

      // Jika tidak ada level yg ditemukan, kembalikan status 404 (Not Found)
      if (levelsSnapshot.empty) {
        return res.status(404).send('No levels found'); // Jika tidak ada dokumen, kirim respons 'No levels found'
      }
      // Memproses setiap dokumen level menggunakan Promise.all untuk menangani operasi asynchronous
      const levelsData = await Promise.all(
        levelsSnapshot.docs.map(async (levelDoc) => { // Iterasi setiap dokumen di dalam snapshot
          const levelData = { id: levelDoc.id, ...levelDoc.data() }; // Mengambil data level dan menambahkannya ke dalam objek levelData dengan ID

          // Mendapatkan subkoleksi 'soal' dari setiap dokumen level
          const soalSnapshot = await db.collection('Levels').doc(levelDoc.id).collection('soal').get();
          const soalList = soalSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })); // Iterasi setiap dokumen soal dan ambil data

          // Kembalikan data level dengan daftar soal
          return {
            ...levelData, // Menyimpan data level
            soal: soalList, // Menyimpan daftar soal terkait
          };
        })
      );

      res.json(levelsData); // Mengirimkan respons dalam format JSON berisi data level dan soal
    } catch (error) {
      console.error('Error fetching data:', error); // Menangani error yang terjadi selama proses pengambilan data
      res.status(500).send('Internal Server Error'); // Mengirimkan status 500 jika terjadi kesalahan di server
    }
  });

  // Endpoint POST untuk menyimpan level baru beserta soal
  app.post('/save-level', async (req, res) => {
    try {
      const db = admin.firestore(); // Inisialisasi Firestore dari admin Firebase

      // Mengambil data level dari request body
      const { totalSoal, nyawa, timerPerSoal, soal } = req.body;
      const levelId = generateId(); // Menghasilkan ID unik untuk level baru

      const levelRef = db.collection('Levels').doc(levelId); // Membuat referensi ke dokumen level di Firestore

      // Menyimpan data level (jumlah soal, nyawa, dan timer) ke dalam Firestore
      await levelRef.set({
        totalSoal,
        nyawa,
        timerPerSoal,
      });

      // Iterasi setiap soal yang diterima dari request body
      for (const item of soal) {
        const soalId = generateId(); // Menghasilkan ID unik untuk soal baru
        const soalRef = db.collection('Levels').doc(levelId).collection('soal').doc(soalId); // Referensi ke subdokumen soal

        await soalRef.set(item); // Menyimpan data soal ke subkoleksi 'soal'
      }

      // Mengirimkan respons bahwa level berhasil dibuat
      res.status(201).json({ message: 'Level created successfully' });
    } catch (error) {
      console.error('Error creating level:', error); // Menangani error yang terjadi selama proses penyimpanan data
      res.status(500).json({ error: 'Failed to create level' }); // Mengirimkan status 500 jika terjadi kesalahan di server
    }
  });
};

// Mengekspor fungsi level untuk digunakan di file lain
module.exports = level;
