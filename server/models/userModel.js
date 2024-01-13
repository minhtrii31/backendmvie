const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  phone: String,
  password: String,
  email: String,
  watched: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }],
  role: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
