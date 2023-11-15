const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 8080;
const axios = require("axios");

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));

app.get("/", (_, response) => {
  response.json("Hello Giallo!");
});

const Giallo = require("./models/giallo");
mongoose.connect(process.env.DATABASE_URL);

// create
app.post("/gialli", async (request, response) => {
  const newGiallo = await Giallo.create(request.body);
  response.json(newGiallo);
});

// read
app.get("/gialli", async (request, response) => {
  const gialli = await Giallo.find(request.query);
  response.json(gialli);
});

// update
app.put("/gialli/:id", async (request, response) => {
  console.log(request.params.id);
  const updatedGiallo = await Giallo.findByIdAndUpdate(
    request.params.id,
    request.body
  );
  response.json(updatedGiallo);
});

// delete
app.delete("/gialli/:id", async (request, response) => {
  const deletedGiallo = await Giallo.findByIdAndDelete(request.params.id);
  response.json(deletedGiallo);
});

app.get("/API", async (request, response) => {
  const { from, to, rating, sort } = request.query;

  const gialloAPI = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&with_original_language=it&with_genres=53|27,53|27,9648|53,9648&primary_release_date.gte=${from}-01-01&primary_release_date.lte=${to}-12-31&vote_average.gte=${rating}&sort_by=${sort}`;
  const res_gialli = await axios.get(gialloAPI);

  const wrangledData = {
    title: res_gialli.data.results[0].title,
    poster: `https://image.tmdb.org/t/p/w400${res_gialli.data.results[0].poster_path}`,
    year: res_gialli.data.results[0].release_date,
    rating: res_gialli.data.results[0].vote_average,
    link: `https://www.themoviedb.org/movie/${res_gialli.data.results[0].id}`,
  };

  response.json(wrangledData);
});
