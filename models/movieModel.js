const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema({
  title: String,
  director: String,
  releaseYear: Number,
  genres: [{ type: mongoose.Schema.Types.ObjectId, ref: "Genre" }],
  imdbRating: Number,
  imageUrl: String,
  video: String,
  poster: String,
  description: String,
  actors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Actor",
    },
  ],
  source: String,
  views: Number,
});
const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
