const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    players: {
        type: [String],
        require: true,
    },
});

const GameSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    competition: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    rink: {
        type: Number,
        required: true,
    },
    team1: {
        type: [TeamSchema],
        required: true,
    },
    team2: {
        type: [TeamSchema],
        required: true,
    },
    points: {
        type: [Object],
        required: true,
    },
    images: {
        type: [String],
        required: false,
    },
});

module.exports = mongoose.model('Game', GameSchema);
