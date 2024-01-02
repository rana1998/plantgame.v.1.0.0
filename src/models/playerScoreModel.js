const mongoose = require('mongoose');

const playerScoreSchema = new mongoose.Schema({
  playerName: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  // Other fields as needed
});

const PlayerScore = mongoose.model('PlayerScore', playerScoreSchema);

module.exports = PlayerScore;
