const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to fetch player account information
router.get('/profile/:userId', userController.getPlayerAccountInfo);

module.exports = router;
