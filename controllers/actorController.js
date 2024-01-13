const Actor = require("../models/actorModel");

exports.getAllActors = async (req, res) => {
  try {
    const actors = await Actor.find();
    res.json(actors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getActorById = async (req, res) => {
  const { id } = req.params;
  try {
    const actor = await Actor.findById(id);
    if (!actor) {
      return res.status(404).json({ message: "Không tìm thấy diễn viên" });
    }
    res.json(actor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createActor = async (req, res) => {
  const { name, birthYear, nationality, movies } = req.body;
  try {
    const actor = new Actor({
      name,
      birthYear,
      nationality,
      movies,
    });
    const newActor = await actor.save();
    res.status(201).json(newActor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateActor = async (req, res) => {
  const { id } = req.params;
  const { name, birthYear, nationality, movies } = req.body;
  try {
    const updatedActor = await Actor.findByIdAndUpdate(id, {
      name,
      birthYear,
      nationality,
      movies,
    });
    if (!updatedActor) {
      return res.status(404).json({ message: "Không tìm thấy diễn viên" });
    }
    res.json(updatedActor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteActor = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedActor = await Actor.findByIdAndRemove(id);
    if (!deletedActor) {
      return res.status(404).json({ message: "Không tìm thấy diễn viên" });
    }
    res.json(deletedActor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
