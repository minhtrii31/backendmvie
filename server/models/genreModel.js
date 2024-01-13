const mongoose = require("mongoose");
const genreSchema = new mongoose.Schema({
  id: Number,
  name: String,
  movies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }],
});
const Genre = mongoose.model("Genre", genreSchema);
module.exports = Genre;
