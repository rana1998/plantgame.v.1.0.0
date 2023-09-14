const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  registrationDate: {
    type: Date,
    default: Date.now,
  },
  currentLocation: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('User', userSchema);
