const mongoose = require("mongoose");
require("dotenv").config();
const Giallo = require("./models/giallo.js");

mongoose.connect(process.env.DATABASE_URL);

async function seed() {
  await Giallo.create([
    {
      title: "The Girl Who Knew Too Much",
      year: "1963",
    },
    {
      title: "Blood and Black Lace",
      year: "1964",
    },
    {
      title: "The Bird with the Crystal Plumage",
      year: "1970",
    },
    {
      title: "Deep Red",
      year: "1975",
    },
    {
      title: "Tenebrae",
      year: "1982",
    },
  ]);

  // disconnect from our database
  mongoose.disconnect();
}

// run function!
seed();
