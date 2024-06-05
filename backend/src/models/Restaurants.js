const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    openTime: { type: String, required: true },
    closeTime: { type: String, required: true },
    description: { type: String, required: true },
    photoUrl: { type: String, required: true }
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
