const User = require("../models/userModel");
const Movie = require("../models/movieModel");

exports.postWatchHistory = async (req, res) => {
  const { movieId, userId } = req.body;
  try {
    const user = await User.findOne({ _id: userId });
    if (!user) {
      return res.status(404).json({ error: "Không tìm thấy người dùng" });
    }
    if (!user.watched.includes(movieId)) {
      user.watched.push(movieId);
      await user.save();
    }

    return res.json({ success: true });
  } catch (error) {
    console.log("Lỗi thêm lịch sử xem", error);
    return res.status(500).json({ error: "Lỗi server" });
  }
};
exports.getUserHistory = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findOne({ _id: userId });
    if (!user) {
      return res.status(404).json({ error: "Không tìm thấy người dùng" });
    }
    return res.json({ watched: user.watched });
  } catch (error) {
    console.log("Lỗi load lịch sử xem", error);
    return res.status(500).json({ error: "Lỗi server" });
  }
};
