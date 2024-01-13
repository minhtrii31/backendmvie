const express = require("express");
const router = express.Router();
const Actor = require("../models/actorModel");
const actorController = require("../controllers/actorController");

router.get("/", actorController.getAllActors);

router.get("/:id", actorController.getActorById);

router.post("/", actorController.createActor);

module.exports = router;
