const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    email: String,
    alias: String,
    password: String, //hashed
    teams: [mongoose.Types.ObjectId] // array of objectIDs corresponding to team objects
})

mongoose.model("users", userSchema);