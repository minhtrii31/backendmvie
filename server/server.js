const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3131;

const connectToDatabase = require("./configs/database");
connectToDatabase();

app.use(cors());
app.use(express.json());

const movieRoutes = require("./routes/movieRoutes");
const authorRoutes = require("./routes/authorRoutes");
const actorRoutes = require("./routes/actorRoutes");
const genreRoutes = require("./routes/genreRoutes");
const userRoutes = require("./routes/userRoutes");
const commentRoutes = require("./routes/commentRoutes");
const watchHistory = require("./routes/watchHistoryRoutes");
const emailRoute = require("./routes/emailRoutes");

app.use("/api/movies", movieRoutes);
app.use("/api/authors", authorRoutes);
app.use("/api/actors", actorRoutes);
app.use("/api/genres", genreRoutes);
app.use("/api/users", userRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/history", watchHistory);
app.use("/api/email", emailRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
