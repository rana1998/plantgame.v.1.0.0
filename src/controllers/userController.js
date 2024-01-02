const SelectedPlant = require('../models/selectedPlantModel');
const ResourceAssignment = require('../models/resourceAssignmentModel');
const PlayerInfo = require('../models/playerInfoModel'); // If the PlayerInfo model is being used for users


const userController = {
  async assignResources(req, res) {
    try {
      const userId = req.params.userId;

      // Sample initial resources to assign during onboarding
      const initialResources = {
        water: 100,
        sunlight: 200,
        nutrients: 50,
      };

      await ResourceAssignment.findOneAndUpdate(
        { userId },
        { userId, resources: initialResources },
        { upsert: true }
      );

      res.json({ message: 'Initial resources assigned successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async savePlantName(req, res) {
    try {
      const userId = req.params.userId;
      const { plantName } = req.body;

      await SelectedPlant.findOneAndUpdate(
        { userId },
        { userId, plantName },
        { upsert: true }
      );

      res.json({ message: 'Plant name saved successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async getPlayerAccountInfo(req, res) {
    try {
      const userId = req.params.userId;

      const playerInfo = await PlayerInfo.findOne({ userId }).populate('userId', 'username');

      res.json(playerInfo);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  
};

module.exports = userController;
