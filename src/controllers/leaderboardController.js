const PlayerScore = require('../models/playerScoreModel');

const leaderboardController = {
  async getLeaderboard(req, res) {
    try {
      // Retrieve player scores from the database sorted by score in descending order
      const leaderboard = await PlayerScore.find({}, 'playerName score').sort({ score: -1 });

      res.json(leaderboard);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = leaderboardController;
