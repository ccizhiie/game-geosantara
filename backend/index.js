const express = require('express');
const cors = require('cors');
const authRoute = require('./routes/authRoute');
const level = require('./routes/level');

const app = express();
const PORT = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// authentikasi
authRoute(app);
level(app);

// game

app.listen(PORT, () => {
  console.log(`Server running on : ${PORT}`);
});
