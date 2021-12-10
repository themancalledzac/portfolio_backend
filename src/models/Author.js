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
  // TODO: Add an Image type for a one to many relationship
  // TODO: Add a Repository type for a many to many relationhip
});

const Author = model("Author", authorSchema);

module.exports = Author;
