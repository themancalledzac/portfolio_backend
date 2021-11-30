const { Schema, model } = require("mongoose");

const filmSchema = new Schema({
  name: {
    type: String,
    required: true,
    default: "Portra 800",
  },
  iso: {
    type: Number,
    required: true,
    default: 800,
  },
  brand: {
    type: String,
    default: "Kodak",
  },
});

const Film = model("Film", filmSchema);

module.exports = Film;
