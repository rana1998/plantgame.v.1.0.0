const express = require('express');
const router = express.Router();
const leaderboardController = require('../controllers/leaderboardController');

// Route to get the leaderboard
router.get('/leaderboard', leaderboardController.getLeaderboard);

module.exports = router;
