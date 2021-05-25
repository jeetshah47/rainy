const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const config = require("./config.json");

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//Database
mongoose
  .connect(config.url)
  .then(() => console.log("Connecting to MongoDb"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

const songsSchema = new mongoose.Schema({
  title: String,
  artist: String,
  description: String,
});

const Songs = mongoose.model("Songs", songsSchema);
async function createSongs(newsongs) {
  const songs = new Songs(newsongs);

  const result = await songs.save();
  console.log(result);
}

//Fake Data

// const data = [
//   {
//     title: "Song 1",
//     artist: "Artist 1",
//     description:
//       "Some quick example text to build on the card title and make up the bulk of the card's content.",
//   },
//   {
//     title: "Song 2",
//     artist: "Artist 2",
//     description:
//       "Some quick example text to build on the card title and make up the bulk of the card's content.",
//   },
//   {
//     title: "Song 3",
//     artist: "Artist 3",
//     description:
//       "Some quick example text to build on the card title and make up the bulk of the card's content.",
//   },
//   {
//     title: "Song 4",
//     artist: "Artist 4",
//     description:
//       "Some quick example text to build on the card title and make up the bulk of the card's content. ",
//   },
// ];

//Routes

app.get("/", async (req, res) => {
  const songData = await Songs.find({});
  // console.log(songData);
  res.render("index", { songs: songData });
});

app.get("/form", (req, res) => {
  res.render("form");
});

app.post("/newsong", (req, res) => {
  const song = {
    title: req.body.title,
    artist: req.body.artist,
    description: req.body.description,
  };

  createSongs(song);

  // data.push(song);
  res.redirect("/");
});

app.listen(process.env.PORT || port, () => {});
