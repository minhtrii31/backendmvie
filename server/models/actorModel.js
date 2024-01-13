const mongoose = require("mongoose");
const actorSchema = new mongoose.Schema({
  id: Number,
  name: String,
  birthYear: Number,
  nationality: String,
  movies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }],
  img: String,
});
const Actor = mongoose.model("Actor", actorSchema);
module.exports = Actor;
