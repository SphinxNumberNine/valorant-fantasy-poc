const mongoose = require("mongoose");
const { Schema } = mongoose;

const Score = new Schema({
    date: Date,
    pointsEarned: Number,
    cumulativeScore: Number
})

module.exports = Score;