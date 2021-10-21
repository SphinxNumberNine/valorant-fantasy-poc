const mongoose = require("mongoose");
require("mongoose-double")(mongoose)
const { Schema } = mongoose;
const Score = require("./Score")

const statsSchema = new Schema({
    roundsPlayed: Number,
    acs: Schema.Types.Double,
    kdr: Schema.Types.Double,
    adr: Schema.Types.Double,
    kpr: Schema.Types.Double,
    apr: Schema.Types.Double,
    fkpr: Schema.Types.Double,
    fdpr: Schema.Types.Double,
    kills: Schema.Types.Double,
    deaths: Schema.Types.Double,
    assists: Schema.Types.Double,
    firstKills: Schema.Types.Double,
    firstDeaths: Schema.Types.Double,
})

const performanceHistorySchema = new Schema({
    date: Date,
    stats: statsSchema
})

const playerSchema = new Schema({
    alias: String, // player name
    firstName: String,
    lastName: String,
    proTeam: String,
    fantasyTeam: mongoose.Types.ObjectId,
    eventStats: statsSchema,
    performanceHistorySchema
})

mongoose.model("players", playerSchema)

