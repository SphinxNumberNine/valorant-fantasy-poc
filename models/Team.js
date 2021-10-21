const mongoose = require("mongoose");
const { Schema } = mongoose;
const Score = require("./Score")

const teamSchema = new Schema({
    parentUser: mongoose.Types.ObjectId, // owner of team
    league: mongoose.Types.ObjectId, // league the team is in
    name: String, // team name
    startingRoster: [mongoose.Types.ObjectId], // array of ids corresponding to Player objects,
    benchRoster: [mongoose.Types.ObjectId], // array of ids corresponding to Player objects,
    scoreHistory: [Score]
})

mongoose.model("teams", teamSchema)
