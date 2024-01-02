const mongoose = require('mongoose');

const resourceAssignmentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  resources: {
    water: {
      type: Number,
      default: 0,
    },
    sunlight: {
      type: Number,
      default: 0,
    },
    nutrients: {
      type: Number,
      default: 0,
    },
  },
});

const ResourceAssignment = mongoose.model('ResourceAssignment', resourceAssignmentSchema);

module.exports = ResourceAssignment;
