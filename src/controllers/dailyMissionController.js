const DailyMission = require('../models/dailyMissionModel');

const dailyMissionController = {
  async getDailyMissions(req, res) {
    try {
      // Retrieve daily missions from the database
      const dailyMissions = await DailyMission.find({}, 'objective target reward');

      res.json(dailyMissions);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = dailyMissionController;
