const { Schema, model } = require("mongoose");

const lensSchema = new Schema({
  name: {
    type: String,
    required: true,
    default: "NIKKOR Z 24-70mm f/4 S",
  },
  aperture: {
    type: String,
    required: true,
    default: "f4",
  },
  fixedLens: {
    type: Boolean,
    required: true,
    default: false,
  },
  focalLength: {
    type: String,
    required: true,
    default: "24mm",
  },
  brand: {
    type: String,
    required: true,
    default: "Nikon",
  },
});

const Lens = model("Lens", lensSchema);

module.exports = Lens;
