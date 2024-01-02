const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to assign initial resources to the user during onboarding
router.put('/assign-resources/:userId', userController.assignResources);

// Route to save the user's selected plant name
router.post('/save-plant-name/:userId', userController.savePlantName);

module.exports = router;
