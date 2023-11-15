const mongoose = require("mongoose");

const gialloSchema = new mongoose.Schema({
  title: String,
  year: String,
});

const Giallo = mongoose.model("Giallo", gialloSchema);

module.exports = Giallo;
