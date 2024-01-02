const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// Route to get the list of events
router.get('/events', eventController.getEvents);

module.exports = router;
