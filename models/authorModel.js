const mongoose = require("mongoose");
const authorSchema = new mongoose.Schema({
  id: Number,
  name: String,
  birthYear: Number,
  nationality: String,
  movies: [String],
});
const Author = mongoose.model("Author", authorSchema);
module.exports = Author;
