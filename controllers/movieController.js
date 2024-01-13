const Movie = require("../models/movieModel");
const Genre = require("../models/genreModel");
const genreController = require("../controllers/genreController");
exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.findMoviesByGenreId = async (req, res) => {
  const { id } = req.params;
  try {
    const movies = await Movie.find({ genres: id });
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getMovieById = async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findOne({ _id: id });
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.findTopRatedMovies = async (req, res) => {
  try {
    const movies = await Movie.find().sort({ imdbRating: -1 }).limit(10);
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.findMostViewedMovies = async (req, res) => {
  try {
    const movies = await Movie.find().sort({ views: -1 }).limit(10);
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.findNewestMovies = async (req, res) => {
  try {
    const movies = await Movie.find().sort({ releaseYear: -1 }).limit(10);
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.findMoviesByGenreName = async (req, res) => {
  const { name } = req.params;
  try {
    const genre = await Genre.findOne({ name });
    if (!genre) {
      return res.status(404).json({ error: "Genre not found" });
    }
    const movies = await Movie.find({ genres: genre._id });
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
