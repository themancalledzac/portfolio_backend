const { Schema, model } = require("mongoose");

const authorSchema = new Schema({
  name: {
    type: String,
    required: true,
    default: "Zechariah Edens",
  },
  photo: {
    type: String,
    default:
      "https://res.cloudinary.com/themancalledzac/image/upload/v1638220918/Portfolio/personal_portrait_color_oj6wxn.jpg",
  },
  instagram: {
    type: String,
    default: "https://www.instagram.com/themancalledzac/",
  },
});

const Author = model("Author", authorSchema);

module.exports = Author;
