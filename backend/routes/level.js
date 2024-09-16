const admin = require('../firebase-config');
const { generateId } = require('../services/generateId');

const level = (app) => {
  app.get('/list-level', async (req, res) => {
    try {
      const db = admin.firestore();

      // Get all levels
      const levelsSnapshot = await db.collection('Levels').get();

      if (levelsSnapshot.empty) {
        return res.status(404).send('No levels found');
      }

      // Process each level
      const levelsData = await Promise.all(
        levelsSnapshot.docs.map(async (levelDoc) => {
          const levelData = { id: levelDoc.id, ...levelDoc.data() };

          // Get the subcollection 'soal' for each level
          const soalSnapshot = await db.collection('Levels').doc(levelDoc.id).collection('soal').get();
          const soalList = soalSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

          return {
            ...levelData,
            soal: soalList,
          };
        })
      );

      res.json(levelsData);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).send('Internal Server Error');
    }
  });

  app.post('/save-level', async (req, res) => {
    try {
      const db = admin.firestore();

      const { totalSoal, nyawa, timerPerSoal, soal } = req.body;
      const levelId = generateId();

      const levelRef = db.collection('Levels').doc(levelId);

      await levelRef.set({
        totalSoal,
        nyawa,
        timerPerSoal,
      });

      for (const item of soal) {
        const soalId = generateId();
        const soalRef = db.collection('Levels').doc(levelId).collection('soal').doc(soalId);

        await soalRef.set(item);
      }

      res.status(201).json({ message: 'Level created successfully' });
    } catch (error) {
      console.error('Error creating level:', error);
      res.status(500).json({ error: 'Failed to create level' });
    }
  });
};

module.exports = level;
