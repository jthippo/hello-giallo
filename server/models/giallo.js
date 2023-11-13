const mongoose = require("mongoose");

// define schema
const gialloSchema = new mongoose.Schema({
  title: String,
  year: String,
});

// create model called "Book" with schema of bookSchema
const Giallo = mongoose.model("Giallo", gialloSchema);

// export model so we can use it other places
module.exports = Giallo;
