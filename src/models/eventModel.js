const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  eventDescription: {
    type: String,
    required: true,
  },
  eventDate: {
    type: Date,
    required: true,
  },
  // Other event details as needed
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
