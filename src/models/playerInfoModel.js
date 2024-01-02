const mongoose = require('mongoose');

const playerInfoSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    default: 'default.jpg',
  },
  rankMedal: {
    type: String,
    default: 'bronze',
  },
  status: {
    type: String,
    default: 'Active',
  },
  currency: {
    type: Number,
    default: 0,
  },
  // Other fields as needed
});

const PlayerInfo = mongoose.model('PlayerInfo', playerInfoSchema);

module.exports = PlayerInfo;
