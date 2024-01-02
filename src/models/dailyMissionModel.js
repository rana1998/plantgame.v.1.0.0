const mongoose = require('mongoose');

const dailyMissionSchema = new mongoose.Schema({
  objective: {
    type: String,
    required: true,
  },
  target: {
    type: String,
    required: true,
  },
  reward: {
    type: String,
    required: true,
  },
  // Other fields as needed
});

const DailyMission = mongoose.model('DailyMission', dailyMissionSchema);

module.exports = DailyMission;
