const express = require('express');
const router = express.Router();
const dailyMissionController = require('../controllers/dailyMissionController');

// Route to get daily mission list
router.get('/daily-missions', dailyMissionController.getDailyMissions);

module.exports = router;
