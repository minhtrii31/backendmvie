const mongoose = require("mongoose");
const Movie = require("../models/movieModel");
mongoose.set("strictQuery", false);
require("dotenv").config();

const connectString = process.env.DB_CONNECTION_STRING;

const connectToDatabase = async () => {
  try {
    await mongoose.connect(connectString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect to MongoDB");
  } catch (e) {
    console.error("Error connecting to MongoDB:", e);
  }
};
module.exports = connectToDatabase;
