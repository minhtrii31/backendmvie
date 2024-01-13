const express = require("express");
const router = express.Router();
const Genre = require("../models/genreModel");
const genreController = require("../controllers/genreController");

router.get("/", genreController.getAllGenres);

router.get("/:genreName", genreController.getGenreByName);
router.get("/id/:genreId", genreController.getGenreById);

module.exports = router;
