const { Schema, model } = require("mongoose");

const imageSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    default: "Zechariah Edens",
  },
  author: authorSchema,
  date: {
    type: String,
  },
  aperture: {
    type: String,
  },
  exposure: {
    type: String,
  },
  focalLength: {
    type: Number,
  },
  isoSpeed: {
    type: String,
  },
  lens: lensSchema,
  film: filmSchema,
  horizontal: {
    type: Boolean,
  },
  googleMapsLink: {
    type: String,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  keywords: keywordSchema,
});

const Image = model("Image", imageSchema);

module.exports = Image;
