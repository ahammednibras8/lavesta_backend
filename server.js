const express = require('express');
const connectDB = require('./config/db');
const artistRoutes = require('./routes/artistRoutes');

connectDB();

const app = express();
app.use(express.json());

// Use the artist routes with the /api prefix
app.use('/api/artists', artistRoutes);

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));