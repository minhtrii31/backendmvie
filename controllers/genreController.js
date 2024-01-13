const Genre = require("../models/genreModel");
exports.getAllGenres = async (req, res) => {
  try {
    const genres = await Genre.find();
    res.json(genres);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getGenreByName = async (req, res) => {
  const { genreName } = req.params;
  try {
    const genre = await Genre.findOne({ name: genreName });
    if (!genre) {
      return res.status(404).json({ message: "Can't find genre" });
    }
    res.json(genre);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getGenreById = async (req, res) => {
  const { genreId } = req.params;
  try {
    const genre = await Genre.findById(genreId);
    if (!genre) {
      return res.status(404).json({ message: "Can't find genre" });
    }
    res.json(genre);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
