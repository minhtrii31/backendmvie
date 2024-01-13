const Comment = require("../models/commentModel");

exports.getCommentByMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const comments = await Comment.find({ movie: req.params.id }).populate(
      "user"
    );
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.postComment = async (req, res) => {
  const { id } = req.params;
  const { text, user } = req.body;

  try {
    const comment = new Comment({
      movie: id,
      text,
      user,
    });
    const savedComment = await comment.save();
    res.status(201).json({ message: "Thành công", savedComment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
