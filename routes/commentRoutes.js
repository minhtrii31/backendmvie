const express = require("express");
const router = express.Router();
const Comment = require("../models/commentModel");
const commentController = require("../controllers/commentController");

router.get("/movie/:id", commentController.getCommentByMovie);
router.post("/add/:id", commentController.postComment);

module.exports = router;
