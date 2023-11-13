const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 8080;

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));

app.get("/", (_, response) => {
  response.json("Hello Giallo!");
});

// set up link to database
const Giallo = require("./models/giallo");
mongoose.connect(process.env.DATABASE_URL);

app.get("/gialli", async (request, response) => {
  const gialli = await Giallo.find(request.query);
  response.json(gialli);
});

app.delete("/gialli/:id", async (request, response) => {
  const deletedGiallo = await Giallo.findByIdAndDelete(request.params.id);
  response.json(deletedGiallo);
});
