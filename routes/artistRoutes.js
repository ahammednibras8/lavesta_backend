// /routes/artistRoutes.js
const express = require('express');
const router = express.Router();
const {
  addArtist,
  getArtists,
  checkAvailability,
} = require('../controllers/artistController');

// Add artist route
router.post('/add', addArtist);

// Get all artists route
router.get('/all', getArtists);

// Check availability route
router.get('/availability', checkAvailability);

module.exports = router;