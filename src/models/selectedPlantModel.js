const mongoose = require('mongoose');

const selectedPlantSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  plantName: {
    type: String,
    default: '', // Stores the user's selected plant name
  },
});

const SelectedPlant = mongoose.model('SelectedPlant', selectedPlantSchema);

module.exports = SelectedPlant;
