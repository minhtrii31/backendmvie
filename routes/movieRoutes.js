const express = require("express");
const router = express.Router();
const Movie = require("../models/movieModel");
const movieController = require("../controllers/movieController");

router.get("/toprated", movieController.findTopRatedMovies);
router.get("/mostviewed", movieController.findMostViewedMovies);
router.get("/newest", movieController.findNewestMovies);
router.get("/bygenrename/:name", movieController.findMoviesByGenreName);

router.get("/:id", movieController.getMovieById);
router.get("/bygenre/:id", movieController.findMoviesByGenreId);
router.get("/", movieController.getAllMovies);
module.exports = router;
