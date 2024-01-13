const express = require("express");
const router = express.Router();
const watchHistory = require("../controllers/watchHistoryController");

router.post("/", watchHistory.postWatchHistory);

router.get("/:userId", watchHistory.getUserHistory);

module.exports = router;
