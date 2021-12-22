const { Schema, model } = require("mongoose");

const imageSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "Author",
  },
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
    type: Number,
  },
  lens: {
    type: Schema.Types.ObjectId,
    ref: "Lens",
  },
  film: {
    type: Schema.Types.ObjectId,
    ref: "Film",
  },
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
  imageSquareUrl: {
    type: String,
    required: true,
  },
  keywords: [
    {
      type: Schema.Types.ObjectId,
      ref: "Keyword",
    },
  ],
});

const Image = model("Image", imageSchema);

module.exports = Image;
