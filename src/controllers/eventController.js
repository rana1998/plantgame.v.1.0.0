const Event = require('../models/eventModel');

const eventController = {
  async getEvents(req, res) {
    try {
      // Retrieve events from the database
      const events = await Event.find({}, 'eventName eventDescription eventDate');

      res.json(events);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = eventController;
