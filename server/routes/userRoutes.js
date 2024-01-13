const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const userController = require("../controllers/userController");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:phone", userController.getUserByPhone);

router.get("/email/:email", userController.getUserByEmail);

router.post(`/login`, userController.login);

router.post("/register", userController.register);

router.put("/update/:id", userController.updateUser);

module.exports = router;
