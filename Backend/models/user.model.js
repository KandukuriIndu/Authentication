// user.model.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const UserData = mongoose.model("User", userSchema); // This should match what you're importing

module.exports = UserData;
