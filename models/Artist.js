const mongoose = require('mongoose');

const ArtistSchema = new mongoose.Schema({
    id: {type: Number, required: true, unique: true},
    name: {type: String, required: true},
    experience: {type: Number, required: true},
    rate: {type: Number, required: true},
    image: {type: String},
    paymentMethod: {
        type: String,
        enum: ['Cash', 'Card', 'Online'],
        required: true,
    },
    availability: [
        {
            date: {type: String},
            timeSlots: [{type: String}],
        },
    ],
    location: {type: String, required: true},
    rating: {type: Number, default: 0, min: 0, max: 5},
});

module.exports = mongoose.model('Artist', ArtistSchema);